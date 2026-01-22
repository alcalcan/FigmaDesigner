# Pages Development Guidelines

Always use imports from the `components` folder and use them properly.

## Import Pattern
When importing components, use the barrel export from the `components` directory:
```typescript
import { Top_bar, Header, search_bar } from "../../components";
```

> [!IMPORTANT]
> Ensure all components are correctly exported in `components/index.ts` before using them in pages.
