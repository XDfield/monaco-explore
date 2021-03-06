export const file = `[v-cloak] {
  display: none;
}

.user-can-drag {
  cursor: grab;
}

.is-dragging {
  // Important because plugin sets inline CSS
  opacity: 1 !important;

  * {
    user-select: none;
    // !important to make sure no style can override this when dragging
    cursor: grabbing !important;
  }
}

.is-ghost {
  opacity: 0.3;
  pointer-events: none;
}

.dropdown-projects {
  .dropdown-content {
    max-height: 200px;
  }
}

.dropdown-menu-issues-board-new {
  width: 320px;

  .dropdown-content {
    max-height: 162px;
  }
}

.issue-board-dropdown-content {
  margin: 0 8px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $dropdown-divider-bg;

  > p {
    margin: 0;
    font-size: 14px;
  }
}

.issue-boards-page {
  .content-wrapper {
    padding-bottom: 0;
  }

  .issues-details-filters {
    display: flex;
  }

  .filter-form {
    width: 100%;
  }
}

.board-extra-actions {
  font-size: 0;
  white-space: nowrap;
}

.boards-app {
  position: relative;

  @include media-breakpoint-up(sm) {
    transition: width $sidebar-transition-duration;
    width: 100%;

    &.is-compact {
      width: calc(100% - #{$gutter-width});
    }
  }
}

.boards-app-loading {
  width: 100%;
  font-size: 34px;
}

.boards-list {
  display: flex;
  height: calc(100vh - #{$issue-board-list-difference-xs});
  width: 100%;
  padding: $gl-padding ($gl-padding / 2);
  overflow-x: scroll;
  white-space: nowrap;
  min-height: 200px;

  @include media-breakpoint-only(sm) {
    height: calc(100vh - #{$issue-board-list-difference-sm});
  }

  @include media-breakpoint-up(md) {
    height: calc(100vh - #{$issue-board-list-difference-md});
  }

  .with-performance-bar & {
    height: calc(100vh - #{$issue-board-list-difference-xs} - #{$performance-bar-height});

    @include media-breakpoint-only(sm) {
      height: calc(100vh - #{$issue-board-list-difference-sm} - #{$performance-bar-height});
    }

    @include media-breakpoint-up(md) {
      height: calc(100vh - #{$issue-board-list-difference-md} - #{$performance-bar-height});
    }
  }
}

.board {
  width: calc(85vw - 15px);
  height: 100%;
  padding-right: ($gl-padding / 4);
  padding-left: ($gl-padding / 4);
  white-space: normal;
  vertical-align: top;

  @include media-breakpoint-up(sm) {
    width: 400px;
  }

  &.is-expandable {
    .board-header {
      cursor: pointer;
    }
  }

  &.is-collapsed {
    width: 50px;
    min-width: 40px;

    .board-header {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      button {
        display: none;
      }
    }

    .board-title {
      padding: 0;
      border-bottom: 0;
      justify-content: center;

      > span {
        width: 100%;
        margin-top: -12px;
        display: block;
        transform: rotate(90deg) translate(35px, 0);
        overflow: initial;
      }
    }

    .board-title-expandable-toggle {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -10px;
    }

    .board-list-component,
    .issue-count-badge {
      display: none;
    }
  }

  &:not(.is-collapsed) {
    flex-grow: 1;
    min-width: 200px;

    .board-list-component {
      display: flex;
      flex-direction: column;
    }
  }
}

.board-inner {
  position: relative;
  height: 100%;
  font-size: $issue-boards-font-size;
  background: $gray-light;
  border: 1px solid $border-color;
  border-radius: $border-radius-default;
  flex: 1;
}

.board-header {
  position: relative;

  &.has-border::before {
    border-top: 3px solid;
    border-color: inherit;
    border-top-left-radius: $border-radius-default;
    border-top-right-radius: $border-radius-default;
    content: '';
    position: absolute;
    width: calc(100% + 2px);
    top: 0;
    left: 0;
    margin-top: -1px;
    margin-right: -1px;
    margin-left: -1px;
    padding-top: 1px;
    padding-right: 1px;
    padding-left: 1px;

    .board-title {
      padding-top: ($gl-padding - 3px);
      padding-bottom: $gl-padding;

      .badge {
        overflow-x: hidden;
      }
    }
  }
}

.board-inner-container {
  border-bottom: 1px solid $border-color;
  padding: $gl-padding;
}

.board-title {
  margin: 0;
  padding: $gl-padding-8 $gl-padding;
  font-size: 1em;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
}

.board-title-text {
  margin: $gl-vert-padding auto $gl-vert-padding 0;
}

.board-delete {
  margin-right: 10px;
  padding: 0;
  color: $gray-darkest;
  background-color: transparent;
  border: 0;
  outline: 0;

  &:hover {
    color: $blue-600;
  }
}

.board-blank-state,
.board-promotion-state {
  padding: $gl-padding;
  background-color: $white-light;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.board-blank-state-list {
  list-style: none;

  > li:not(:last-child) {
    margin-bottom: 8px;
  }

  .label-color {
    position: relative;
    top: 2px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 3px;
    border-radius: $border-radius-default;
  }
}

.board-list-component {
  position: relative;
  flex: 1;
  min-height: 0; // firefox fix
}

.board-list {
  height: 100%;
  width: 100%;
  margin-bottom: 0;
  padding: $gl-padding-4;
  list-style: none;
  overflow-y: auto;
  overflow-x: hidden;
}

.board-list-loading {
  margin-top: 10px;
  font-size: (26px / $issue-boards-font-size) * 1em;
}

.board-card {
  position: relative;
  padding: $gl-padding;
  background: $white-light;
  border-radius: $border-radius-default;
  border: 1px solid $gray-200;
  box-shadow: 0 1px 2px $issue-boards-card-shadow;
  list-style: none;
  line-height: $gl-padding;

  &:not(:last-child) {
    margin-bottom: $gl-padding-8;
  }

  &.is-active,
  &.is-active .board-card-assignee:hover a {
    background-color: $blue-50;
  }

  .badge {
    border: 0;
    outline: 0;

    &:hover {
      text-decoration: underline;
    }

    @include media-breakpoint-down(lg) {
      font-size: $gl-font-size-xs;
      padding-left: $gl-padding-4;
      padding-right: $gl-padding-4;
      font-weight: $gl-font-weight-bold;
    }
  }

  svg {
    vertical-align: top;
  }

  .confidential-icon {
    color: $orange-600;
    cursor: help;
  }

  @include media-breakpoint-down(md) {
    padding: $gl-padding-8;
  }
}

.board-card-title {
  @include overflow-break-word();
  font-size: 1em;

  a {
    color: $gl-text-color;
  }

  @include media-breakpoint-down(md) {
    font-size: $label-font-size;
  }
}

.board-card-header {
  display: flex;
}

.board-card-assignee {
  display: flex;
  margin-top: -$gl-padding-4;
  margin-bottom: -$gl-padding-4;

  .avatar-counter {
    vertical-align: middle;
    line-height: $gl-padding-24;
    min-width: $gl-padding-24;
    height: $gl-padding-24;
    border-radius: $gl-padding-24;
    background-color: $gl-text-color-tertiary;
    font-size: $gl-font-size-xs;
    cursor: help;
    font-weight: $gl-font-weight-bold;
    margin-left: -$gl-padding-4;
    border: 0;
    padding: 0 $gl-padding-4;

    @include media-breakpoint-down(md) {
      min-width: auto;
      height: $gl-padding;
      border-radius: $gl-padding;
      line-height: $gl-padding;
    }
  }

  img {
    vertical-align: top;
  }

  .user-avatar-link:not(:only-child) {
    margin-left: -$gl-padding-4;

    &:nth-of-type(1) {
      z-index: 2;
    }

    &:nth-of-type(2) {
      z-index: 1;
    }
  }

  .avatar {
    margin: 0;

    @include media-breakpoint-down(md) {
      width: $gl-padding;
      height: $gl-padding;
    }
  }

  @include media-breakpoint-down(md) {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.board-card-number {
  font-size: $gl-font-size-xs;
  color: $gl-text-color-secondary;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    font-size: $label-font-size;
  }
}

.board-card-number-container {
  overflow: hidden;
}

.issue-boards-search {
  width: 395px;

  .form-control {
    display: inline-block;
    width: 210px;
  }
}

.board-list-count {
  padding: 10px 0;
  color: $gl-text-color-secondary;
  font-size: 13px;

  > .fa {
    margin-right: 5px;
  }
}

.board-new-issue-form {
  z-index: 4;
  margin: 5px;
}

.page-with-contextual-sidebar.layout-page .issue-boards-sidebar {
  .issuable-sidebar-header {
    position: relative;
  }

  .gutter-toggle {
    position: absolute;
    top: 0;
    bottom: 15px;
    right: 0;
    width: 22px;
    color: $gray-darkest;

    svg {
      position: absolute;
      top: 50%;
      margin-top: (-11px / 2);
    }

    &:hover {
      path {
        fill: $gray-darkest;
      }
    }
  }

  .issuable-header-text {
    @include overflow-break-word();
    padding-right: 35px;

    > strong {
      font-weight: $gl-font-weight-bold;
    }
  }
}

.right-sidebar.right-sidebar-expanded {
  &.boards-sidebar-slide-enter-active,
  &.boards-sidebar-slide-leave-active {
    transition: width $sidebar-transition-duration, padding $sidebar-transition-duration;
  }

  &.boards-sidebar-slide-enter,
  &.boards-sidebar-slide-leave-active {
    width: 0;
    padding-left: 0;
    padding-right: 0;
  }
}

.add-issues-modal {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($black, 0.3);
  z-index: 9999;
}

.add-issues-container {
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 85vh;
  max-width: 1100px;
  min-height: 500px;
  margin: auto;
  padding: 25px 15px 0;
  background-color: $white-light;
  border-radius: $border-radius-default;
  box-shadow: 0 2px 12px rgba($black, 0.5);

  .empty-state {
    display: flex;
    flex: 1;
    margin-top: 0;

    &.add-issues-empty-state-filter {
      flex-direction: column;
      justify-content: center;
    }

    > .row {
      width: 100%;
      margin: auto 0;
    }

    .svg-content {
      margin-top: -40px;
    }
  }
}

.add-issues-header {
  margin: -25px -15px -5px;
  border-top: 0;
  border-bottom: 1px solid $border-color;
  border-top-right-radius: $border-radius-default;
  border-top-left-radius: $border-radius-default;

  > h2 {
    margin: 0;
    font-size: 18px;
  }
}

.add-issues-search {
  display: flex;

  .issues-filters {
    flex: 1;
  }
}

.add-issues-list-column {
  width: 100%;

  @include media-breakpoint-up(sm) {
    width: 50%;
  }

  @include media-breakpoint-up(md) {
    width: (100% / 3);
  }
}

.add-issues-list {
  display: flex;
  flex: 1;
  padding-top: 3px;
  margin-left: -$gl-vert-padding;
  margin-right: -$gl-vert-padding;
  overflow-y: scroll;

  .board-card-parent {
    padding: 0 5px 5px;
  }

  .board-card {
    border: 1px solid $border-gray-dark;
    box-shadow: 0 1px 2px rgba($issue-boards-card-shadow, 0.3);
    cursor: pointer;
  }
}

.add-issues-list-loading {
  align-self: center;
  width: 100%;
  padding-left: $gl-vert-padding;
  padding-right: $gl-vert-padding;
  font-size: 35px;
}

.add-issues-footer {
  margin: auto -15px 0;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-right-radius: $border-radius-default;
  border-bottom-left-radius: $border-radius-default;
}

.add-issues-footer-to-list {
  padding-left: $gl-vert-padding;
  padding-right: $gl-vert-padding;
  line-height: 34px;
}

.issue-card-selected {
  position: absolute;
  right: -3px;
  top: -3px;
  width: 17px;
  background-color: $blue-500;
  color: $white-light;
  border: 1px solid $blue-600;
  font-size: 9px;
  line-height: 15px;
  border-radius: 50%;
}

.modal-filters {
  display: flex;

  > .dropdown {
    display: none;
    margin-right: 10px;

    @include media-breakpoint-up(sm) {
      display: block;
    }
  }

  .dropdown-menu-toggle {
    width: 100px;

    @include media-breakpoint-up(md) {
      width: 140px;
    }
  }
}

.board-card-info {
  color: $gl-text-color-secondary;
  white-space: nowrap;
  margin-right: $gl-padding-8;

  &:not(.board-card-weight) {
    cursor: help;
  }

  &.board-card-weight {
    color: $gl-text-color;
    cursor: pointer;

    &:hover {
      color: initial;
      text-decoration: underline;
    }
  }

  .board-card-info-icon {
    color: $gray-600;
    margin-right: $gl-padding-4;
  }

  @include media-breakpoint-down(md) {
    font-size: $label-font-size;
  }
}

.board-issue-path.js-show-tooltip {
  cursor: help;
}
`;
export const origin = `[v-cloak] {
  display: none;
}

.user-can-drag {
  cursor: grab;
}

.is-dragging {
  // Important because plugin sets inline CSS
  opacity: 1 !important;

  * {
    user-select: none;
    // !important to make sure no style can override this when dragging
    cursor: grabbing !important;
  }
}

.is-ghost {
  opacity: 0.3;
  pointer-events: none;
}

.dropdown-projects {
  .dropdown-content {
    max-height: 200px;
  }
}

.dropdown-menu-issues-board-new {
  width: 320px;

  .dropdown-content {
    max-height: 162px;
  }
}

.issue-board-dropdown-content {
  margin: 0 8px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $dropdown-divider-bg;

  > p {
    margin: 0;
    font-size: 14px;
  }
}

.issue-boards-page {
  .content-wrapper {
    padding-bottom: 0;
  }

  .issues-details-filters {
    display: flex;
  }

  .filter-form {
    width: 100%;
  }
}

.board-extra-actions {
  font-size: 0;
  white-space: nowrap;
}

.boards-app {
  position: relative;

  @include media-breakpoint-up(sm) {
    transition: width $sidebar-transition-duration;
    width: 100%;

    &.is-compact {
      width: calc(100% - #{$gutter-width});
    }
  }
}

.boards-app-loading {
  width: 100%;
  font-size: 34px;
}

.boards-list {
  height: calc(100vh - #{$issue-board-list-difference-xs});
  width: 100%;
  padding: $gl-padding ($gl-padding / 2);
  overflow-x: scroll;
  white-space: nowrap;
  min-height: 200px;

  @include media-breakpoint-only(sm) {
    height: calc(100vh - #{$issue-board-list-difference-sm});
  }

  @include media-breakpoint-up(md) {
    height: calc(100vh - #{$issue-board-list-difference-md});
  }

  .with-performance-bar & {
    height: calc(100vh - #{$issue-board-list-difference-xs} - #{$performance-bar-height});

    @include media-breakpoint-only(sm) {
      height: calc(100vh - #{$issue-board-list-difference-sm} - #{$performance-bar-height});
    }

    @include media-breakpoint-up(md) {
      height: calc(100vh - #{$issue-board-list-difference-md} - #{$performance-bar-height});
    }
  }
}

.board {
  display: inline-block;
  width: calc(85vw - 15px);
  height: 100%;
  padding-right: ($gl-padding / 2);
  padding-left: ($gl-padding / 2);
  white-space: normal;
  vertical-align: top;

  @include media-breakpoint-up(sm) {
    width: 400px;
  }

  &.is-expandable {
    .board-header {
      cursor: pointer;
    }
  }

  &.is-collapsed {
    width: 50px;

    .board-header {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      button {
        display: none;
      }
    }

    .board-title {
      padding: 0;
      border-bottom: 0;
      justify-content: center;

      > span {
        width: 100%;
        margin-top: -12px;
        display: block;
        transform: rotate(90deg) translate(35px, 0);
        overflow: initial;
      }
    }

    .board-title-expandable-toggle {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -10px;
    }

    .board-list-component,
    .issue-count-badge {
      display: none;
    }
  }

  &:not(.is-collapsed) {
    .board-list-component {
      display: flex;
      flex-direction: column;
    }
  }
}

.board-inner {
  position: relative;
  height: 100%;
  font-size: $issue-boards-font-size;
  background: $gray-light;
  border: 1px solid $border-color;
  border-radius: $border-radius-default;
  flex: 1;
}

.board-header {
  position: relative;

  &.has-border::before {
    border-top: 3px solid;
    border-color: inherit;
    border-top-left-radius: $border-radius-default;
    border-top-right-radius: $border-radius-default;
    content: '';
    position: absolute;
    width: calc(100% + 2px);
    top: 0;
    left: 0;
    margin-top: -1px;
    margin-right: -1px;
    margin-left: -1px;
    padding-top: 1px;
    padding-right: 1px;
    padding-left: 1px;

    .board-title {
      padding-top: ($gl-padding - 3px);
      padding-bottom: $gl-padding;
    }
  }
}

.board-inner-container {
  border-bottom: 1px solid $border-color;
  padding: $gl-padding;
}

.board-title {
  margin: 0;
  padding: $gl-padding-8 $gl-padding;
  font-size: 1em;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
}

.board-title-text {
  margin: $gl-vert-padding auto $gl-vert-padding 0;
}

.board-delete {
  margin-right: 10px;
  padding: 0;
  color: $gray-darkest;
  background-color: transparent;
  border: 0;
  outline: 0;

  &:hover {
    color: $blue-600;
  }
}

.board-blank-state,
.board-promotion-state {
  padding: $gl-padding;
  background-color: $white-light;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.board-blank-state-list {
  list-style: none;

  > li:not(:last-child) {
    margin-bottom: 8px;
  }

  .label-color {
    position: relative;
    top: 2px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 3px;
    border-radius: $border-radius-default;
  }
}

.board-list-component {
  position: relative;
  flex: 1;
  min-height: 0; // firefox fix
}

.board-list {
  height: 100%;
  width: 100%;
  margin-bottom: 0;
  padding: $gl-padding-4;
  list-style: none;
  overflow-y: auto;
  overflow-x: hidden;
}

.board-list-loading {
  margin-top: 10px;
  font-size: (26px / $issue-boards-font-size) * 1em;
}

.board-card {
  position: relative;
  padding: $gl-padding;
  background: $white-light;
  border-radius: $border-radius-default;
  border: 1px solid $gray-200;
  box-shadow: 0 1px 2px $issue-boards-card-shadow;
  list-style: none;
  line-height: $gl-padding;

  &:not(:last-child) {
    margin-bottom: $gl-padding-8;
  }

  &.is-active,
  &.is-active .board-card-assignee:hover a {
    background-color: $blue-50;
  }

  .badge {
    border: 0;
    outline: 0;

    &:hover {
      text-decoration: underline;
    }

    @include media-breakpoint-down(lg) {
      font-size: $gl-font-size-xs;
      padding-left: $gl-padding-4;
      padding-right: $gl-padding-4;
      font-weight: $gl-font-weight-bold;
    }
  }

  svg {
    vertical-align: top;
  }

  .confidential-icon {
    color: $orange-600;
    cursor: help;
  }

  @include media-breakpoint-down(md) {
    padding: $gl-padding-8;
  }
}

.board-card-title {
  @include overflow-break-word();
  font-size: 1em;

  a {
    color: $gl-text-color;
  }

  @include media-breakpoint-down(md) {
    font-size: $label-font-size;
  }
}

.board-card-header {
  display: flex;
}

.board-card-assignee {
  display: flex;
  margin-top: -$gl-padding-4;
  margin-bottom: -$gl-padding-4;

  .avatar-counter {
    vertical-align: middle;
    line-height: $gl-padding-24;
    min-width: $gl-padding-24;
    height: $gl-padding-24;
    border-radius: $gl-padding-24;
    background-color: $gl-text-color-tertiary;
    font-size: $gl-font-size-xs;
    cursor: help;
    font-weight: $gl-font-weight-bold;
    margin-left: -$gl-padding-4;
    border: 0;
    padding: 0 $gl-padding-4;

    @include media-breakpoint-down(md) {
      min-width: auto;
      height: $gl-padding;
      border-radius: $gl-padding;
      line-height: $gl-padding;
    }
  }

  img {
    vertical-align: top;
  }

  .user-avatar-link:not(:only-child) {
    margin-left: -$gl-padding-4;

    &:nth-of-type(1) {
      z-index: 2;
    }

    &:nth-of-type(2) {
      z-index: 1;
    }
  }

  .avatar {
    margin: 0;

    @include media-breakpoint-down(md) {
      width: $gl-padding;
      height: $gl-padding;
    }
  }

  @include media-breakpoint-down(md) {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.board-card-number {
  font-size: $gl-font-size-xs;
  color: $gl-text-color-secondary;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    font-size: $label-font-size;
  }
}

.board-card-number-container {
  overflow: hidden;
}

.issue-boards-search {
  width: 395px;

  .form-control {
    display: inline-block;
    width: 210px;
  }
}

.board-list-count {
  padding: 10px 0;
  color: $gl-text-color-secondary;
  font-size: 13px;

  > .fa {
    margin-right: 5px;
  }
}

.board-new-issue-form {
  z-index: 4;
  margin: 5px;
}

.page-with-contextual-sidebar.layout-page .issue-boards-sidebar {
  .issuable-sidebar-header {
    position: relative;
  }

  .gutter-toggle {
    position: absolute;
    top: 0;
    bottom: 15px;
    right: 0;
    width: 22px;
    color: $gray-darkest;

    svg {
      position: absolute;
      top: 50%;
      margin-top: (-11px / 2);
    }

    &:hover {
      path {
        fill: $gray-darkest;
      }
    }
  }

  .issuable-header-text {
    @include overflow-break-word();
    padding-right: 35px;

    > strong {
      font-weight: $gl-font-weight-bold;
    }
  }
}

.right-sidebar.right-sidebar-expanded {
  &.boards-sidebar-slide-enter-active,
  &.boards-sidebar-slide-leave-active {
    transition: width $sidebar-transition-duration, padding $sidebar-transition-duration;
  }

  &.boards-sidebar-slide-enter,
  &.boards-sidebar-slide-leave-active {
    width: 0;
    padding-left: 0;
    padding-right: 0;
  }
}

.add-issues-modal {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($black, 0.3);
  z-index: 9999;
}

.add-issues-container {
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 85vh;
  max-width: 1100px;
  min-height: 500px;
  margin: auto;
  padding: 25px 15px 0;
  background-color: $white-light;
  border-radius: $border-radius-default;
  box-shadow: 0 2px 12px rgba($black, 0.5);

  .empty-state {
    display: flex;
    flex: 1;
    margin-top: 0;

    &.add-issues-empty-state-filter {
      flex-direction: column;
      justify-content: center;
    }

    > .row {
      width: 100%;
      margin: auto 0;
    }

    .svg-content {
      margin-top: -40px;
    }
  }
}

.add-issues-header {
  margin: -25px -15px -5px;
  border-top: 0;
  border-bottom: 1px solid $border-color;
  border-top-right-radius: $border-radius-default;
  border-top-left-radius: $border-radius-default;

  > h2 {
    margin: 0;
    font-size: 18px;
  }
}

.add-issues-search {
  display: flex;

  .issues-filters {
    flex: 1;
  }
}

.add-issues-list-column {
  width: 100%;

  @include media-breakpoint-up(sm) {
    width: 50%;
  }

  @include media-breakpoint-up(md) {
    width: (100% / 3);
  }
}

.add-issues-list {
  display: flex;
  flex: 1;
  padding-top: 3px;
  margin-left: -$gl-vert-padding;
  margin-right: -$gl-vert-padding;
  overflow-y: scroll;

  .board-card-parent {
    padding: 0 5px 5px;
  }

  .board-card {
    border: 1px solid $border-gray-dark;
    box-shadow: 0 1px 2px rgba($issue-boards-card-shadow, 0.3);
    cursor: pointer;
  }
}

.add-issues-list-loading {
  align-self: center;
  width: 100%;
  padding-left: $gl-vert-padding;
  padding-right: $gl-vert-padding;
  font-size: 35px;
}

.add-issues-footer {
  margin: auto -15px 0;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-right-radius: $border-radius-default;
  border-bottom-left-radius: $border-radius-default;
}

.add-issues-footer-to-list {
  padding-left: $gl-vert-padding;
  padding-right: $gl-vert-padding;
  line-height: 34px;
}

.issue-card-selected {
  position: absolute;
  right: -3px;
  top: -3px;
  width: 17px;
  background-color: $blue-500;
  color: $white-light;
  border: 1px solid $blue-600;
  font-size: 9px;
  line-height: 15px;
  border-radius: 50%;
}

.modal-filters {
  display: flex;

  > .dropdown {
    display: none;
    margin-right: 10px;

    @include media-breakpoint-up(sm) {
      display: block;
    }
  }

  .dropdown-menu-toggle {
    width: 100px;

    @include media-breakpoint-up(md) {
      width: 140px;
    }
  }
}

.board-card-info {
  color: $gl-text-color-secondary;
  white-space: nowrap;
  margin-right: $gl-padding-8;

  &:not(.board-card-weight) {
    cursor: help;
  }

  &.board-card-weight {
    color: $gl-text-color;
    cursor: pointer;

    &:hover {
      color: initial;
      text-decoration: underline;
    }
  }

  .board-card-info-icon {
    color: $gray-600;
    margin-right: $gl-padding-4;
  }

  @include media-breakpoint-down(md) {
    font-size: $label-font-size;
  }
}

.board-issue-path.js-show-tooltip {
  cursor: help;
}
`;
export const diff = `@@ -85,6 +85,7 @@\n }\n \n .boards-list {\n+  display: flex;\n   height: calc(100vh - #{$issue-board-list-difference-xs});\n   width: 100%;\n   padding: $gl-padding ($gl-padding / 2);\n@@ -114,11 +115,10 @@\n }\n \n .board {\n-  display: inline-block;\n   width: calc(85vw - 15px);\n   height: 100%;\n-  padding-right: ($gl-padding / 2);\n-  padding-left: ($gl-padding / 2);\n+  padding-right: ($gl-padding / 4);\n+  padding-left: ($gl-padding / 4);\n   white-space: normal;\n   vertical-align: top;\n \n@@ -134,6 +134,7 @@\n \n   &.is-collapsed {\n     width: 50px;\n+    min-width: 40px;\n \n     .board-header {\n       position: absolute;\n@@ -175,6 +176,9 @@\n   }\n \n   &:not(.is-collapsed) {\n+    flex-grow: 1;\n+    min-width: 200px;\n+\n     .board-list-component {\n       display: flex;\n       flex-direction: column;\n@@ -215,6 +219,10 @@\n     .board-title {\n       padding-top: ($gl-padding - 3px);\n       padding-bottom: $gl-padding;\n+\n+      .badge {\n+        overflow-x: hidden;\n+      }\n     }\n   }\n }\n`;
