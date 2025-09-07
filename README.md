# Caravan Invitation Generator

A React TypeScript application for generating personalized invitation cards for the Caravan Tree Planting event.

## Features

- **Form Input**: Enter salutation (Mr./Ms.), full name, position, and company name
- **Live Preview**: Real-time preview of the generated invitation card
- **Template Integration**: Uses the CaravanInvitation.png template with custom text overlay
- **Download Functionality**: Download the generated invitation as PNG image
- **Responsive Design**: Works on desktop and mobile devices
- **Custom Font**: Uses the Chelthm font family for authentic styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Usage

1. **Select Salutation**: Choose between "Mr." or "Ms." from the dropdown
2. **Enter Details**: Fill in the full name, position, and company name
3. **Preview**: The invitation card will update in real-time on the right side
4. **Download**: Click "Tải hình về máy" to download the generated invitation

## Project Structure

```
src/
├── components/
│   ├── InvitationForm.tsx      # Form component with input fields
│   ├── InvitationForm.css      # Form styling
│   ├── InvitationPreview.tsx   # Preview component with canvas
│   └── InvitationPreview.css   # Preview styling
├── types.ts                    # TypeScript type definitions
├── App.tsx                     # Main application component
├── App.css                     # Main application styling
├── index.tsx                   # Application entry point
└── index.css                   # Global styles

public/
└── resources/
    ├── CaravanInvitation.png   # Template image
    ├── chelthm.ttf            # Custom font
    └── ...                     # Other assets
```

## Technologies Used

- **React 18**: Frontend framework
- **TypeScript**: Type safety and better development experience
- **HTML5 Canvas**: For rendering text overlay on template image
- **CSS3**: Styling with custom properties and responsive design

## Customization

### Font
The application uses the Chelthm font family. To change the font:
1. Replace the `chelthm.ttf` file in `public/resources/`
2. Update the font-family references in CSS files

### Template
To use a different template:
1. Replace `CaravanInvitation.png` in `public/resources/`
2. Adjust the text positioning in `InvitationPreview.tsx` if needed

### Styling
Modify the CSS files to change colors, layout, or styling to match your brand requirements.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for SOTRANS GROUP's Caravan Tree Planting event.
