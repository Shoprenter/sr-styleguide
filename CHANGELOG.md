## [new] - published date
### Added
- SrStandardLayout component
- Breadcrumbs from route parameters to page container
- Demo list page
- Language-aware default placeholder for SrSelect component
- SrSimpleTableFilterTd component to simplify the creation of filterable table columns
- Demo form page
- SrTextarea component
- SrFormDivider component
- Getting Started page

### Fixed
- Resolved an issue where global `html` tag styles were not being applied correctly.
- Demo page menu is now scrollable and accord able
- Help button & breadcrumb container no longer takes up space when empty
- Style rule scope now includes package version
- SrEditIcon component now contains the correct icon
- SrFormRow now has properly applied bottom margin
- SrDatePicker is now clearable just like the other input components
- SrSwitch is able to display hint and validation errors and consequentially has the same layout as the other input components
- SrDatePicker now displays in localized language and format

### Changed
- Updated margins for the SrHeading component
- Style adjustments to the SrSimpleTable component
- SrHeading now adds space between the header buttons


## [1.1.0] - 2025-04-09
### Added
- Added new SrSimpleMultiCheckbox component for cases when only a straightforward listing of selectable options is required.

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
