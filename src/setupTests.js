// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
