# 📚 Astro Learning Guide

## 🎯 Step-by-Step Learning Path

### Phase 1: Understanding Components (30 minutes)

1. **Start with the Home Page** (`src/pages/index.astro`)
   - Open the file and see how it imports components
   - Notice the `---` frontmatter section (JavaScript/TypeScript area)
   - See how props are passed to components like `<Hero title="..." />`

2. **Explore the Hero Component** (`src/components/Hero.astro`)
   - See the TypeScript interface defining props
   - Understand how default values work
   - Notice the `<slot />` for content insertion

3. **Study the Card Component** (`src/components/Card.astro`)
   - See conditional rendering with `{condition && <element>}`
   - Understand how CSS classes are dynamically applied
   - Notice the ternary operator for conditional styling

### Phase 2: Layouts and Composition (20 minutes)

4. **Examine the Layout** (`src/layouts/Layout.astro`)
   - See how it wraps all pages with navigation and footer
   - Understand the `<slot />` concept for page content
   - Notice how props control layout behavior

5. **Check Navigation Patterns**
   - See how links are created with `<a href="/path">`
   - Notice responsive design classes from Tailwind

### Phase 3: Data Fetching Patterns (45 minutes)

6. **Static Site Generation** (`src/pages/about.astro`)
   - Data is defined at the top (build time)
   - Arrays are mapped to components
   - Perfect for content that doesn't change often

7. **Server-Side Rendering** (`src/pages/blog/index.astro`)
   - Notice `export const prerender = false;`
   - API fetch happens on each request
   - Error handling with try/catch

8. **Dynamic Routes** (`src/pages/blog/[id].astro`)
   - `getStaticPaths()` runs at build time
   - Creates multiple pages from one template
   - Props are passed from the path function

### Phase 4: Practical Exercises (60 minutes)

9. **Create Your Own Component**
   ```astro
   ---
   // src/components/MyComponent.astro
   export interface Props {
     name: string;
     age?: number;
   }
   const { name, age = 25 } = Astro.props;
   ---
   
   <div class="p-4 bg-blue-100 rounded">
     <h3>Hello, {name}!</h3>
     {age && <p>You are {age} years old.</p>}
   </div>
   ```

10. **Add a New Page**
    - Create `src/pages/contact.astro`
    - Use the Layout component
    - Add your own content

11. **Modify Existing Components**
    - Change colors in the Hero component
    - Add new props to the Card component
    - Experiment with different layouts

### Phase 5: Advanced Concepts (45 minutes)

12. **TypeScript Integration**
    - All `.astro` files support TypeScript in frontmatter
    - Interfaces define prop shapes
    - Type checking happens automatically

13. **Performance Understanding**
    - SSG pages load instantly (pre-built)
    - SSR pages are dynamic but slower
    - Zero JavaScript by default = fast sites

14. **Styling Patterns**
    - Tailwind classes for responsive design
    - Component-scoped styles with `<style>`
    - CSS variables for theming

## 🔍 Key Files to Study

| File | Concept | What to Learn |
|------|---------|---------------|
| `src/pages/index.astro` | SSG & Components | How static pages work |
| `src/pages/blog/index.astro` | SSR | Dynamic data fetching |
| `src/pages/blog/[id].astro` | Dynamic Routes | URL parameters |
| `src/components/Card.astro` | Props & TypeScript | Component patterns |
| `src/layouts/Layout.astro` | Layouts & Slots | Page structure |

## 🧪 Experiments to Try

### Beginner Experiments
1. Change the hero title on the home page
2. Add a new link to the navigation
3. Create a simple "Services" page
4. Modify the color scheme

### Intermediate Experiments
1. Add a new prop to the Card component
2. Create a photo gallery component
3. Add a search box to the blog page
4. Implement dark mode toggle

### Advanced Experiments
1. Add a CMS integration
2. Create an API endpoint
3. Add client-side interactivity
4. Implement form handling

## 🚀 Running Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npm run check
```

## 📖 Understanding the Output

When you run `npm run dev`:
- SSG pages (home, about) are built once
- SSR pages (blog index) are built on each request
- Dynamic routes are pre-generated for static paths

## 🔧 Common Patterns

### Component with Props
```astro
---
interface Props {
  title: string;
  optional?: boolean;
}
const { title, optional = false } = Astro.props;
---

<div>
  <h2>{title}</h2>
  {optional && <p>Optional content</p>}
</div>
```

### Data Fetching (SSG)
```astro
---
const data = await fetch('https://api.example.com').then(r => r.json());
---

<div>
  {data.map(item => <p>{item.name}</p>)}
</div>
```

### Dynamic Routes
```astro
---
export async function getStaticPaths() {
  const items = await fetchItems();
  return items.map(item => ({
    params: { id: item.id },
    props: { item }
  }));
}
---
```

Happy learning! 🎉
