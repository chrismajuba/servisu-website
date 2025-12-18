# Route Configuration

This directory contains the routing configuration for the application following React Router best practices.

## Structure

### `routes.js`
- **Purpose**: Centralized route path constants
- **Usage**: Import `ROUTES` to use route paths instead of magic strings
- **Benefits**: 
  - Single source of truth for routes
  - Easy refactoring
  - Type safety (if using TypeScript)

### `routeConfig.js`
- **Purpose**: Route configuration organized by type
- **Structure**:
  - `public`: Routes accessible to everyone
  - `publicWithAuth`: Public routes that require authentication
  - `auth`: Authentication pages (login/register)
  - `userProtected`: Routes only accessible to authenticated users
  - `providerProtected`: Routes only accessible to authenticated providers

## Usage

```javascript
import { ROUTES } from './config/routes';

// Use route constants
navigate(ROUTES.USER_ACCOUNT);

// Generate dynamic routes
import { getViewProviderRoute } from './config/routes';
navigate(getViewProviderRoute(providerId));
```

## Route Protection

Routes are protected using the `ProtectedRoute` component which:
- Checks authentication status
- Validates user type (user vs provider)
- Shows appropriate sign-in form if not authenticated
- Redirects unauthorized users

## Adding New Routes

1. Add the route path constant to `routes.js`
2. Add the route configuration to the appropriate section in `routeConfig.js`
3. The route will automatically be included in the routing system

Example:
```javascript
// In routes.js
export const ROUTES = {
  // ... existing routes
  NEW_FEATURE: "/new-feature",
};

// In routeConfig.js
userProtected: [
  // ... existing routes
  {
    path: ROUTES.NEW_FEATURE,
    element: <NewFeaturePage />,
    requireAuth: true,
    requiredUserType: "user",
  },
];
```

