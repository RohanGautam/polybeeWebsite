# PolybeeWebsite

- AOS animations work on html elements, not custom angular component names.
- [css backgrounds](https://freefrontend.com/css-animated-backgrounds/)
- [scroll to ele](https://stackoverflow.com/a/43945776/6274300), and do it [smoothly](https://usefulangle.com/post/156/javascript-scroll-to-element)
- [rxjs and it's infinite cool operators](https://netbasal.com/reactive-sticky-header-in-angular-12dbffb3f1d3)
- [darken background image](https://stackoverflow.com/a/26621579/6274300)
- `fade-right` animation fucks up animations and stuff The fix is to [hide overflow](https://github.com/michalsnik/aos/issues/416#issuecomment-433204190)

# Deployment:

### Code:

Create a production build with

```
npm run build
```

This gets saved in `dist/`, and the files will be in `dist/static`. Create a `.zip` file in here (`dist/static.zip`). We'll need it for uploading to namecheap.

### Namecheap

- Go to the dashboard, and get to `Cpanel` by clicking the storage icon (the icon in the middle of the products section)
  ![image](https://user-images.githubusercontent.com/17317792/92896429-f0097700-f44e-11ea-8cc4-3a2519dcf614.png)
- go to `File Manager`
  ![image](https://user-images.githubusercontent.com/17317792/92896505-01528380-f44f-11ea-92da-b647acb12776.png)
- Go to the `public_html` folder. Use the action bar on the top to select all and delete everything in here.
  ![image](https://user-images.githubusercontent.com/17317792/92896548-0b748200-f44f-11ea-9dc9-ef535a2d380c.png)
- Uploading folders is not possible, so the easiest way is to upload the contents are:
  - upload the `.zip` file mentioned earlier
  - extract it.
  - go to the extracted folder, and using the action bar on top, move all files to the root of `public_html`.
  - delete the zip file and the empty folder
- Celebrate! 🎉

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.
