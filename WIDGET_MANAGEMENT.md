# WidgetDock Store - Widget Management

This document explains how to manage widgets in the WidgetDock Store.

## Adding New Widgets

All widget data is stored in `widgets.json`. To add a new widget, simply add a new object to the "widgets" array with the following properties:

### Required Properties

```json
{
  "name": "Widget Name",
  "desc": "Description of what the widget does",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "icon": "<i class=\"fa fa-icon-name\"></i>",
  "color": "linear-gradient(120deg, #color1, #color2)",
  "download": "https://github.com/username/repo",
  "screenshot": "https://i.imgur.com/screenshot.png",
  "featured": true|false,
  "category": "CategoryName",
  "locked": true|false
}
```

### Property Explanations

- **name**: The display name of the widget
- **desc**: A short description explaining what the widget does
- **tags**: Array of relevant tags for filtering/search
- **icon**: FontAwesome icon HTML (must escape quotes with backslashes)
- **color**: CSS gradient for the widget card accent color
- **download**: Direct download link or GitHub repository URL
- **screenshot**: URL to a screenshot image (optional but recommended)
- **featured**: Whether to show in the "Featured Widgets" section
- **category**: Must match one of the categories in the "categories" array
- **locked**: If true, shows "Coming Soon" instead of download button

### Example New Widget

```json
{
  "name": "CPU Temperature",
  "desc": "Monitor your Mac's CPU temperature and thermal state in real-time.",
  "tags": ["System", "Monitoring", "Temperature"],
  "icon": "<i class=\"fa fa-thermometer-half\"></i>",
  "color": "linear-gradient(120deg, #ff6b6b 0%, #ffa500 100%)",
  "download": "https://github.com/WidgetDock/cpu-temperature",
  "screenshot": "https://i.imgur.com/example.png",
  "featured": false,
  "category": "System",
  "locked": false
}
```

## Adding New Categories

To add a new category, simply add it to the "categories" array in `widgets.json`:

```json
"categories": ["All", "Dock", "System", "Utilities", "Productivity", "Weather", "Music", "Calendar", "Status", "NewCategory"]
```

Note: "All" should always be the first category.

## Icons

Icons use FontAwesome 6.4.2. You can find available icons at:
https://fontawesome.com/icons

Make sure to escape quotes in the HTML when adding to JSON:
- Correct: `"<i class=\"fa fa-music\"></i>"`
- Wrong: `"<i class="fa fa-music"></i>"`

## Colors

Use CSS gradients for attractive card colors. Some good examples:
- `linear-gradient(120deg, #667eea 0%, #764ba2 100%)`
- `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`
- `linear-gradient(120deg, #4facfe 0%, #00f2fe 100%)`

## Testing Changes

After modifying `widgets.json`, simply refresh the webpage to see your changes. The website will automatically load the new widget data.

## File Structure

```
WidgetDockStore/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling
├── widgets.json        # Widget data (edit this!)
├── cube-solid.svg      # Site favicon
└── README.md           # This documentation
```
