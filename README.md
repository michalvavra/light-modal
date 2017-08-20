# LightModal

Perfect Salesforce Lightning Modal Window based on [SLDS Modal](https://www.lightningdesignsystem.com/components/modals/) Guidelines.


## Features

- Using Escape or clicking outside modal area to close
- Fade-in and fade-out animations
- Supports multiple inheritance
- 100% Lightning


## Table of Contents

- [Examples](#examples)
- [Install](#install)
- [Usage](#usage)
    - [Component](#component)
    - [Controller](#controller)
- [Documentation](#documentation)
    - [Attributes](#attributes)
    - [Methods](#methods)
- [License](#license)


## Examples

You can find running examples on [Heroku](https://quiet-cliffs-64147.herokuapp.com).


## Install

Copy `src/aura/lightModal` to yours `src/aura` Salesforce directory.


## Usage

### Component

```xml
<lightning:button label="My Modal" onclick="{!c.openMyModal}" variant="neutral" />

<c:lightModal aura:id="myModal" title="This is My Modal" isDirectional="true">
    Hello, World!
    <aura:set attribute="actions">
        <lightning:button label="Previous" onclick="{!c.closeMyModal}" variant="neutral" />
        <lightning:button label="Next" onclick="{!c.closeMyModal}" variant="brand" />
    </aura:set>
</c:lightModal>
```

### Controller

```js
({
    openMyModal: function(component, event, helper) {
        component.find('myModal').open();
    },

    closeMyModal: function(component, event, helper) {
        component.find('myModal').close();
    }
})
```


## Documentation

### Attributes

Attribute | Type | Required | Description
--------- | ---- | -------- | -----------
`title` | `String` | `false` | Title of the modal. Rendered at the top.
`tagline` | `Aura.Component[]` | `false` | Paragraph under the title.
`actions` | `Aura.Component[]` | `false` | The bottom of the modal.
`class` | `String` | `false` | A CSS classes to be attached to the modal. Classes are added in addition to base styles.
`isLarge` | `Boolean` | `false` | Specifies whether the modal should be extra wide. Default value is `false`.
`isDirectional` | `Boolean` | `false` | Specifies whether the modal action buttons directional (one button aligned on the left and one on the right for example). Default value is `false`.
`allowClose` | `Boolean` | `false` | Specifies whether the modal can be closed by clicking on the close icon or outside of the window. Default value is `true`.

### Methods

- `open()`
- `close()`


## License

[MIT](LICENSE.md) (c) Michal Vavra