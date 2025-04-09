## [1.1.0] - 2025-04-09
### Added
- Added new SrSimpleMultiCheckbox component for cases when only a straightforward listing of selectable options is required.
- Added SrStandardLayout component to provide a consistent layout structure for pages.

### Fixed
- Changed the suboptimal ordering of some style rules in the stylesheet
- Removed unused style rules to make the stylesheet's size smaller
- Fixed SrCheckbox component to handle v-model correctly
- Fixed SrRadioGroup component to handle v-model correctly

### Changed
- Updated the SrMultiCheckbox demo example to clearly demonstrate that individual checkbox options can implement custom behaviors, such as forced selection, disabled state, or triggering custom events.
- Vuetify dependency got constrained to version 2.6.14 specifically. Previously it defaulted to the latest package of version 2.

## [1.0.0] - 2025-04-04
### Initial release
- Basic components and package functionality
