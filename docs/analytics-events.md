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

## Usage Example

```typescript
import { events } from "@/components/analytics/events";

// When timer starts
events.timerStart(300); // 5 minutes = 300 seconds

// When timer settings change
events.timerFontChange("Inter");
events.timerOrientationChange("horizontal");

// When error occurs
events.error("Failed to connect to shared timer");
```

## Implementation Notes

1. All time values are tracked in seconds for consistency
2. Events are categorized into four main groups: Timer, Timer Settings, Share, and Error
3. Each event follows a consistent naming pattern for better analytics organization
4. Error events capture the error message for debugging purposes 