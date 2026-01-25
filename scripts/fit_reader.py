#!/usr/bin/env python3
"""
FIT File Reader for Workout Analysis
Extracts key metrics from .fit files for training log entry
"""

import sys
from datetime import datetime
from fitparse import FitFile
import argparse


def parse_fit_file(fit_file_path):
    """Parse a FIT file and extract workout metrics"""

    fitfile = FitFile(fit_file_path)

    # Initialize data structures
    workout_data = {
        'activity_type': None,
        'start_time': None,
        'total_time': 0,
        'total_distance': 0,
        'avg_hr': None,
        'max_hr': None,
        'avg_power': None,
        'normalized_power': None,
        'avg_cadence': None,
        'avg_speed': None,
        'avg_pace': None,
        'calories': None,
        'elevation_gain': None,
        'elevation_loss': None,
    }

    laps = []
    records = []

    # Parse all messages
    for record in fitfile.get_messages():
        # Session data (overall workout summary)
        if record.name == 'session':
            for field in record:
                if field.name == 'sport':
                    workout_data['activity_type'] = field.value
                elif field.name == 'start_time':
                    workout_data['start_time'] = field.value
                elif field.name == 'total_elapsed_time':
                    workout_data['total_time'] = field.value / 60  # Convert to minutes
                elif field.name == 'total_distance':
                    workout_data['total_distance'] = field.value / 1000  # Convert to km
                elif field.name == 'avg_heart_rate':
                    workout_data['avg_hr'] = field.value
                elif field.name == 'max_heart_rate':
                    workout_data['max_hr'] = field.value
                elif field.name == 'avg_power':
                    workout_data['avg_power'] = field.value
                elif field.name == 'normalized_power':
                    workout_data['normalized_power'] = field.value
                elif field.name == 'avg_cadence':
                    workout_data['avg_cadence'] = field.value
                elif field.name == 'avg_speed':
                    workout_data['avg_speed'] = field.value * 3.6  # m/s to km/h
                elif field.name == 'total_calories':
                    workout_data['calories'] = field.value
                elif field.name == 'total_ascent':
                    workout_data['elevation_gain'] = field.value
                elif field.name == 'total_descent':
                    workout_data['elevation_loss'] = field.value

        # Lap data (intervals)
        elif record.name == 'lap':
            lap_data = {}
            for field in record:
                if field.name == 'total_elapsed_time':
                    lap_data['time'] = field.value
                elif field.name == 'total_distance':
                    lap_data['distance'] = field.value / 1000
                elif field.name == 'avg_heart_rate':
                    lap_data['avg_hr'] = field.value
                elif field.name == 'max_heart_rate':
                    lap_data['max_hr'] = field.value
                elif field.name == 'avg_power':
                    lap_data['avg_power'] = field.value
                elif field.name == 'avg_cadence':
                    lap_data['avg_cadence'] = field.value
                elif field.name == 'avg_speed':
                    lap_data['avg_speed'] = field.value * 3.6 if field.value else None
                elif field.name == 'total_ascent':
                    lap_data['elevation_gain'] = field.value
            laps.append(lap_data)

        # Record data (second-by-second)
        elif record.name == 'record':
            record_data = {}
            for field in record:
                record_data[field.name] = field.value
            records.append(record_data)

    # Calculate pace if running
    if workout_data['avg_speed'] and workout_data['avg_speed'] > 0:
        pace_min_per_km = 60 / workout_data['avg_speed']
        minutes = int(pace_min_per_km)
        seconds = int((pace_min_per_km - minutes) * 60)
        workout_data['avg_pace'] = f"{minutes}:{seconds:02d}/km"

    return workout_data, laps, records


def format_time(seconds):
    """Format seconds into MM:SS or HH:MM:SS"""
    if seconds is None:
        return "N/A"
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)

    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    else:
        return f"{minutes}:{secs:02d}"


def print_workout_summary(workout_data, laps):
    """Print a formatted summary of the workout"""

    print("\n" + "="*60)
    print("WORKOUT SUMMARY")
    print("="*60)

    print(f"\nActivity: {workout_data['activity_type']}")
    if workout_data['start_time']:
        print(f"Date: {workout_data['start_time'].strftime('%Y-%m-%d %H:%M:%S')}")

    print(f"\nDuration: {workout_data['total_time']:.1f} min")

    if workout_data['total_distance'] > 0:
        print(f"Distance: {workout_data['total_distance']:.2f} km")

    if workout_data['avg_pace']:
        print(f"Avg Pace: {workout_data['avg_pace']}")
    elif workout_data['avg_speed']:
        print(f"Avg Speed: {workout_data['avg_speed']:.1f} km/h")

    if workout_data['avg_hr']:
        print(f"\nAvg HR: {workout_data['avg_hr']} bpm")
    if workout_data['max_hr']:
        print(f"Max HR: {workout_data['max_hr']} bpm")

    if workout_data['avg_power']:
        print(f"\nAvg Power: {workout_data['avg_power']} W")
    if workout_data['normalized_power']:
        print(f"Normalized Power: {workout_data['normalized_power']} W")

    if workout_data['avg_cadence']:
        print(f"\nAvg Cadence: {workout_data['avg_cadence']} rpm")

    if workout_data['calories']:
        print(f"\nCalories: {workout_data['calories']} C")

    if workout_data['elevation_gain']:
        print(f"\nElevation Gain: {workout_data['elevation_gain']} m")
    if workout_data['elevation_loss']:
        print(f"Elevation Loss: {workout_data['elevation_loss']} m")

    # Print lap details if there are multiple laps
    if len(laps) > 1:
        print("\n" + "-"*60)
        print("LAP DETAILS")
        print("-"*60)

        for i, lap in enumerate(laps, 1):
            print(f"\nLap {i}:")
            if 'time' in lap:
                print(f"  Time: {format_time(lap['time'])}")
            if 'distance' in lap:
                print(f"  Distance: {lap['distance']:.2f} km")
            if 'avg_power' in lap:
                print(f"  Avg Power: {lap['avg_power']} W")
            if 'avg_hr' in lap:
                print(f"  Avg HR: {lap['avg_hr']} bpm")
            if 'avg_cadence' in lap:
                print(f"  Avg Cadence: {lap['avg_cadence']} rpm")
            if 'avg_speed' in lap and lap['avg_speed']:
                print(f"  Avg Speed: {lap['avg_speed']:.1f} km/h")

    print("\n" + "="*60)


def export_to_csv(workout_data, laps, output_file):
    """Export lap data to CSV format"""
    import csv

    with open(output_file, 'w', newline='') as f:
        writer = csv.writer(f)

        # Header
        headers = ['Lap', 'Time', 'Distance', 'Avg Power', 'Avg HR', 'Max HR', 'Avg Cadence', 'Avg Speed', 'Elevation Gain']
        writer.writerow(headers)

        # Laps
        for i, lap in enumerate(laps, 1):
            row = [
                i,
                format_time(lap.get('time')),
                f"{lap.get('distance', 0):.2f}",
                lap.get('avg_power', ''),
                lap.get('avg_hr', ''),
                lap.get('max_hr', ''),
                lap.get('avg_cadence', ''),
                f"{lap.get('avg_speed', 0):.1f}" if lap.get('avg_speed') else '',
                lap.get('elevation_gain', ''),
            ]
            writer.writerow(row)

    print(f"\nLap data exported to: {output_file}")


def main():
    parser = argparse.ArgumentParser(
        description='Extract workout metrics from FIT files',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python fit_reader.py workout.fit
  python fit_reader.py workout.fit --csv output.csv
        """
    )

    parser.add_argument('fit_file', help='Path to the FIT file')
    parser.add_argument('--csv', help='Export lap data to CSV file')

    args = parser.parse_args()

    try:
        print(f"Reading FIT file: {args.fit_file}")
        workout_data, laps, records = parse_fit_file(args.fit_file)

        print_workout_summary(workout_data, laps)

        if args.csv:
            export_to_csv(workout_data, laps, args.csv)

    except FileNotFoundError:
        print(f"Error: File '{args.fit_file}' not found")
        sys.exit(1)
    except Exception as e:
        print(f"Error reading FIT file: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
