# Changelog

## [0.5.0] - 2024-03-28

### Changed

- Upgraded Storybook
- Storybook content now includes a11y notes
- Storybook docs more public ready

## [0.4.0] - 2024-03-28

### Added

- CSS tooling
  - When developing, optional script w/ Turbowatch triggers Lightning CSS to bundle & minify
  - For building 11ty, must build CSS beforehand
  - Tried PurgeCSS, not ESM compatible?
  - Tried UnCSS, takes too much out

### Changed

- Started bundling and minifying CSS
  - Mostly unchanged CSS to go in base.css
    - (There isn't as much benefit pulling popular assets from CDN given [cache partitioning](https://developer.chrome.com/blog/http-cache-partitioning))
  - Main styles go in styles.css

## [0.3.0] - 2024-03-26

### Added

- Retrofit a11y
- Added Skip to Links (probably excessive, but important a working option is there)
- Note: in iOS VoiceOver, skip to links work but remain invisible ;(

## [0.2.0] - 2024-03-22

### Added

- Storybook 8! _Let&rsquo;s go!_
