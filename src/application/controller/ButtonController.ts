export default class ButtonController {
  public isLoading: boolean
  public isDisabled: boolean

  constructor() {
    this.isDisabled = false
    this.isLoading = false
  }
}
