import Icon from '@Components/common/Icon';
import React from 'react';

function Categories() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border p-4">
      <span className="text-xl font-semibold">Workout Categories</span>
      <div className="grid w-full grid-cols-6 gap-6">
        {/* Gym */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="fitness_center" />
          Gym
        </div>
        {/* Cardio */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="directions_run" />
          Cardio
        </div>
        {/* Boxing */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="sports_mma" />
          Boxing
        </div>
        {/* Pool */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="pool" />
          Pool
        </div>
        {/* Dance */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="woman" />
          Dance
        </div>
        {/* Yoga */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="self_improvement" />
          Yoga
        </div>
        {/* Crossfit */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="settings_accessibility" />
          Crossfit
        </div>
        {/* Cycling */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="pedal_bike" />
          Cycling
        </div>
        {/* Aerobics */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="groups" />
          Aerobics
        </div>
        {/* Zumba */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="music_note" />
          Zumba
        </div>
        {/* Stretching */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="accessibility_new" />
          Stretching
        </div>
        {/* Weightlifting */}
        <div className="flex items-center justify-center gap-2 rounded-lg border p-2">
          <Icon name="sports_kabaddi" />
          Weightlifting
        </div>
      </div>
    </div>
  );
}

export default Categories;
