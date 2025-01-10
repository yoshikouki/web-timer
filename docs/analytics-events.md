# Analytics Events Design

This document describes the Google Analytics events tracked in the Web Timer application.

## Event Categories

### Timer
Events related to timer operations

#### Timer Operations
- **action**: `timer_start`
  - **category**: `timer`
  - **label**: `start`
  - **value**: Initial time set (in seconds)

- **action**: `timer_pause`
  - **category**: `timer`
  - **label**: `pause`
  - **value**: Remaining time (in seconds)

- **action**: `timer_reset`
  - **category**: `timer`
  - **label**: `reset`
  - **value**: Remaining time at reset (in seconds)

- **action**: `timer_complete`
  - **category**: `timer`
  - **label**: `complete`
  - **value**: Total time that was set (in seconds)

#### Timer Settings
- **action**: `timer_settings_open`
  - **category**: `timer_settings`
  - **label**: `open`

- **action**: `timer_settings_close`
  - **category**: `timer_settings`
  - **label**: `close`

- **action**: `timer_time_set`
  - **category**: `timer_settings`
  - **label**: `time`
  - **value**: Time set (in seconds)

- **action**: `timer_font_change`
  - **category**: `timer_settings`
  - **label**: Font name

- **action**: `timer_orientation_change`
  - **category**: `timer_settings`
  - **label**: `horizontal` | `vertical`

- **action**: `timer_resolution_change`
  - **category**: `timer_settings`
  - **label**: Resolution in milliseconds

- **action**: `timer_finish_sound_change`
  - **category**: `timer_settings`
  - **label**: Sound name

- **action**: `timer_finish_sound_volume_change`
  - **category**: `timer_settings`
  - **label**: `volume`
  - **value**: Volume level (0-1)

### Share
Events related to sharing functionality

- **action**: `timer_share`
  - **category**: `share`
  - **label**: `create`
  - **value**: Time set when shared (in seconds)

- **action**: `timer_share_join`
  - **category**: `share`
  - **label**: `join`
  - **value**: Remaining time when joined (in seconds)

### Error
Events related to error tracking

- **action**: `error`
  - **category**: `error`
  - **label**: Error message

## Best Practices

### Event Tracking Implementation

1. **Centralize Event Tracking in Custom Hooks**
   - Consolidate related event tracking logic in custom hooks
   - Example: Timer settings events are tracked in `useTimerCore` hook
   - This approach reduces code duplication and improves maintainability

2. **Event Tracking in State Management**
   - Track events where state changes occur
   - Avoid scattering event tracking across UI components
   - Example: All timer settings events are tracked in `updateTimerControlSettings`

```typescript
// Good: Centralized event tracking in state management
const updateTimerControlSettings = (settings: Partial<TimerControllerSettingsType>) => {
  setTimerControlSettings((prev) => {
    // Track all settings changes in one place
    for (const [key, value] of Object.entries(settings)) {
      switch (key) {
        case "font":
          events.timerFontChange(value);
          break;
        // ... other settings
      }
    }
    return { ...prev, ...settings };
  });
};

// Bad: Scattered event tracking in components
const FontSelector = () => {
  return (
    <Select
      onValueChange={(font) => {
        updateTimerControlSettings({ font });
        events.timerFontChange(font); // Avoid tracking here
      }}
    />
  );
};
```

3. **Type Safety**
   - Use TypeScript to ensure event parameters are correct
   - Define clear interfaces for event tracking functions
   - Leverage type inference and validation

4. **Testing Considerations**
   - Event tracking should be easily mockable for testing
   - Consider creating test utilities for event tracking
   - Verify events are fired with correct parameters

## Usage Example

```typescript
import { events } from "@/components/analytics/events";

// When timer starts
events.timerStart(300); // 5 minutes = 300 seconds

// When timer settings change
events.timerFontChange("Inter");
events.timerOrientationChange("horizontal");

// When settings dialog opens/closes
events.timerSettingsOpen();
events.timerSettingsClose();

// When error occurs
events.error("Failed to connect to shared timer");
```

## Implementation Notes

1. All time values are tracked in seconds for consistency
2. Events are categorized into four main groups: Timer, Timer Settings, Share, and Error
3. Each event follows a consistent naming pattern for better analytics organization
4. Error events capture the error message for debugging purposes 