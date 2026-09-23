# Prayer Library

Prayer Library is a Markdown-first, mobile-compatible Obsidian plugin for daily prayer planning.

## Use

Open the dashboard from the ribbon or command palette, add prayer items, assign categories, and optionally add Scripture links. Each category controls how many active items rotate into the daily report. A prayer may also have weekly, monthly, or exact-date schedules by adding a `schedule` array to its frontmatter.

Mark items prayed from the daily dashboard. Dates and optional notes are stored on the prayer note, so the history remains readable and portable. Answered prayers retain their history but leave normal rotation; archived prayers are kept out of daily results until restored.

## Storage

The default root is `Prayer Library/` with `Prayers/` and `Daily Reports/`. The root is configurable in plugin settings. All data is ordinary Markdown and no network or other plugin is required.

## Schedule example

```yaml
schedule:
  - frequency: weekly
    weekdays: [monday, thursday]
  - frequency: monthly
    day: 15
  - frequency: dates
    dates: [2026-09-10]
```

Scripture links are optional and can point to Scripture Library notes or any native Obsidian note.

## Public integration bridge

Other Red-Beard add-ons may use the optional public methods `getDailyPrayers(date, categories)`, `markPrayed(prayerId, date)`, and `openPrayer(prayerId)`. These methods return the same scheduled and rotating daily selection used by the Prayer Library dashboard, so integrations do not need to duplicate rotation logic or create a second prayer history.
