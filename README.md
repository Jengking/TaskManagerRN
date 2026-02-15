# Task Manager - React Native Learning Project

A fully functional task management mobile app built with React Native and Expo. This project was created as a learning journey from zero React Native knowledge to a complete, production-ready application.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📱 Features

- ✅ **Add, Edit, Delete Tasks** - Full CRUD operations
- ✅ **Mark as Complete** - Toggle task completion status
- ✅ **Task Details Screen** - View and edit individual tasks
- ✅ **Data Persistence** - Tasks saved locally with AsyncStorage
- ✅ **Auto-Save** - Changes persist automatically
- ✅ **Confirmation Dialogs** - Prevent accidental deletions
- ✅ **Empty State** - Friendly UI when no tasks exist
- ✅ **Task Statistics** - Track total and completed tasks
- ✅ **Clean UI** - Modern, intuitive interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Expo Go app on your phone (for testing)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/TaskManager.git
   cd TaskManager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - Install "Expo Go" app on your phone
   - Scan the QR code with your camera (iOS) or Expo Go app (Android)
   - App will load on your phone!

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and tools
- **Expo Router** - File-based navigation
- **TypeScript** - Type-safe JavaScript
- **AsyncStorage** - Local data persistence
- **React Hooks** - State management (useState, useEffect)

## 📂 Project Structure

```
TaskManager/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen with task list
│   │   └── explore.tsx        # Secondary tab (can be customized)
│   ├── task-detail.tsx        # Task detail/edit screen
│   └── _layout.tsx            # Navigation setup
├── components/
│   └── Task.tsx               # Reusable task component
├── assets/                    # Images and other assets
├── app.json                   # Expo configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 📖 Learning Path

This project was built following a structured learning approach:

### Phase 1: React Fundamentals
- Components and Props
- JSX syntax
- Basic styling with StyleSheet
- Rendering lists with map()

### Phase 2: Interactivity
- State management with useState
- Event handling (onPress, onChangeText)
- User input with TextInput
- Updating arrays immutably

### Phase 3: Performance
- FlatList for efficient rendering
- Empty states and conditional rendering
- List optimization

### Phase 4: Navigation
- Expo Router file-based routing
- Screen navigation with useRouter
- Passing data between screens
- Long press gestures

### Phase 5: Data Persistence
- AsyncStorage for local storage
- useEffect for lifecycle management
- Loading and saving data
- Error handling with try/catch

## 🎯 Key Concepts Learned

- **React Hooks**: useState, useEffect
- **Array Methods**: map, filter, spread operator
- **Event Handling**: Touch events, text input
- **Navigation**: File-based routing with Expo Router
- **Storage**: AsyncStorage for persistence
- **TypeScript**: Type definitions and interfaces
- **Async Operations**: async/await, promises
- **UI/UX**: Confirmation dialogs, loading states

## 📱 How to Use the App

1. **Add a Task**: Type in the input field and press "+" or Enter
2. **Complete a Task**: Tap on a task to toggle completion
3. **View Details**: Long press a task to open detail screen
4. **Edit a Task**: In detail screen, modify title or status
5. **Delete a Task**: Tap the trash icon (🗑️)
6. **Clear Completed**: Remove all completed tasks at once
7. **Your tasks auto-save** - Close and reopen app, they're still there!

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Start with cleared cache
npm start -- --reset-cache

# Run on Android emulator
npm run android

# Run on iOS simulator (Mac only)
npm run ios

# Run on web
npm run web
```

## 📦 Building for Production

### Create APK (Android)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Configure build**
   ```bash
   eas build:configure
   ```

4. **Build APK**
   ```bash
   eas build --platform android --profile preview
   ```

5. **Download and install** the APK on your device

## 🐛 Troubleshooting

### Metro bundler won't start
```bash
npm start -- --reset-cache
```

### App not loading on phone
- Ensure phone and computer are on same WiFi
- Try tunnel mode in Expo
- Restart Expo Go app

### Tasks not persisting
- Check AsyncStorage installation
- Look for errors in console
- Try clearing app data

## 🚀 Future Enhancements

Ideas for expanding this project:

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Priority levels (High, Medium, Low)
- [ ] Search and filter tasks
- [ ] Dark mode support
- [ ] Animations and transitions
- [ ] Cloud sync (Firebase)
- [ ] Shared task lists
- [ ] Recurring tasks
- [ ] Task notes/descriptions

## 📚 Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## 🤝 Contributing

This is a learning project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built as a learning project following a structured React Native curriculum.

**Learning Journey:** From zero React Native knowledge to a complete app with:
- Component architecture
- State management
- Navigation
- Data persistence
- Production-ready code

## 🙏 Acknowledgments

- React Native community for excellent documentation
- Expo team for making mobile development accessible
- All the tutorials and resources that helped along the way

## 📞 Contact

Questions or feedback? Feel free to open an issue!

---

**⭐ If this project helped you learn React Native, consider giving it a star!**

Made with ❤️ and React Native
