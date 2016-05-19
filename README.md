# Sass Boilerplate

This is a sample project using the [7-1 architecture pattern](http://sass-guidelin.es/#architecture) and sticking to [Sass Guidelines](http://sass-guidelin.es) writing conventions.


sass/
|
|– toolbox/
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|   |– _mqMixins.scss     # Sass Media Queries Mixins
|   |– _inlineList.scss   # Sass Mixins for Horzontal Lists
|   …                     # Etc.
|
|– base/
|   |– _vars.scss         # Sass Variables
|   |– _base.scss         # generic rules
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|
|– themes/
|   |– _newsday.scss      # Site Specific variables
|   |– _news12.scss       # Site Specific variables
|   |– _amny.scss         # Site Specific variables
|   …                     # Etc.
|

|
|– layout.scss
|- queries.scss

styles.scss              # Main Sass file