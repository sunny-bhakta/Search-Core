# 05. UX & Interaction Patterns

Overview: design facet panels that are easy to use, accessible, and clear about which filters are active.

### Description
- Offer multi-select, AND/OR logic, and chips or breadcrumbs for active filters.
- Show counts, disabled states, and “show more” buttons for long lists.
- Ensure keyboard navigation, screen reader labels, and responsive layouts.

### History Snapshot
- Early faceting UIs were static sidebars with checkboxes only.
- Mobile usage pushed teams to adopt collapsible panels and chips.
- Design systems now provide reusable filter components with accessibility baked in.

### Pros
- Better conversion because users can refine confidently.
- Lower support tickets since UI explains what filters do.
- Reusable components speed up new page builds.

### Cons
- Complex interactions are harder to test across devices.
- Accessibility regressions can sneak in during redesigns.
- Requires tight coupling with analytics to know which patterns work.

### Production Apps
- Retail apps show active filters as chips above results.
- Travel sites use sliders for price range and toggles for amenities.
- Enterprise dashboards provide saved filter presets for common tasks.

### Tiny Example
- **Input:** user selects brand=A and color=red.
- **Output steps:**
	1. UI shows two chips with clear remove icons.
	2. Screen reader announces “Filter applied: brand A, color red.”
	3. Results update immediately, and user can clear filters with one tap.
