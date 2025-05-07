import { Component } from '@angular/core';

@Component({
  selector: 'app-danger-alert',
  standalone: false,
  template: `
  <div class="alert alert-danger">
    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
  </div>`,
  styleUrl: './danger-alert.component.css'
})
export class DangerAlertComponent {

}
