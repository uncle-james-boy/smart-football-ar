## POST /track-interaction

Tracks user interactions from the AR system.

### Request
{
  "action": "ball_tap",
  "timestamp": "ISO timestamp"
}

### Response
{
  "message": "Interaction tracked successfully",
  "data": {
    "action": "ball_tap",
    "timestamp": "ISO timestamp"
  }
}