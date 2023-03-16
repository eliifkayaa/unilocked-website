import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrls: ['./notification-settings.component.scss', '../panel.scss'],
})
export class NotificationSettingsComponent implements OnInit {""
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public notificationForm = this.fb.group({
    post:this.fb.group({ site: [''], email: [''] }),
    quotes:this.fb.group({ site: [''], email: [''] }),
    tags:this.fb.group({ site: [''], email: [''] }),
    messages:this.fb.group({ site: [''], email: [''] , sms: ['']}),
    unread_messages:this.fb.group({ site: [''], email: [''],remind_period: [''] }),
    following_activities: this.fb.group({ site: [''], email: [''] ,email_frequency: ['']}),
    connections: this.fb.group({ site: [''], email: [''] , sms:[''], email_frequency: [''], sms_frequency: ['']}),
    follows: this.fb.group({ site: [''], email: [''] }),
    achivements: this.fb.group({ site: [''], email: [''] , sms: ['']}),
    profile_views: this.fb.group({ site: [''], email: [''] }),
    folllow_suggestions: this.fb.group({ site: [''], email: [''], email_frequency:[''] }),
    community_activities: this.fb.group({ site: [''], email: [''] }),
    community_suggestions: this.fb.group({ site: [''], email: [''], email_frequency:[''] }),
    event_updates: this.fb.group({ site: [''], email: [''] , sms: ['']}),
    event_reminders: this.fb.group({ site: [''], email: [''] , sms: ['']}),
    event_suggestions: this.fb.group({ site: [''], email: ['']}),
    event_invites: this.fb.group({ site: [''], email: ['']}),
    project_activities: this.fb.group({ site: [''], email: [''], email_frequency:[''] }),
    project_requests: this.fb.group({ site: [''], email: ['']}),
    project_suggestions: this.fb.group({ site: [''], email: [''], email_frequency:[''] }),
    internship_suggestions: this.fb.group({ site: [''], email: [''], email_frequency:[''] }),
    saved_internships: this.fb.group({ site: [''], email: ['']}),
    internship_requests_updates: this.fb.group({ site: [''], email: [''] , sms: ['']}),
    internship_request_results: this.fb.group({ site: [''], email: [''] , sms: ['']}),
    career_suggestions: this.fb.group({ site: [''], email: ['']} ),
    other: this.fb.group({ site: [''], email: ['']}),

  });
}
