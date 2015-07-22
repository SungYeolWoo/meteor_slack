# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-9 : ADDING USERS


Enable login with password to your application:
```
meteor add accounts-password
```

Now add login buttons:
```
meteor add accounts-ui
```

client/views/home/home.html
```html
  ...
    {{/each}}
  </ul>
  {{> loginButtons}}
</template>
```