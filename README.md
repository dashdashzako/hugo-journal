# Journal

_Journal_ is a minimalist theme for [Hugo](http://gohugo.io).

It focuses on improving reading experience with high contrast colors and no fancy effect.

It also uses [Highlight.js](https://highlightjs.org/) for the syntaxic coloration of code snippets.

Demo is available [here](https://damiencaselli.github.io/hugo-journal-demo/).

## Installation

Please refer to the [Hugo documentation](http://gohugo.io/themes/installing/).

## Configuration

A few parameters should be adjusted in the site config:

```toml
[params]
  description = "Blog meta description."
  githubUsername = "damiencaselli"
  twitterUsername = "damiencaselli"
  tagline = "Blog tagline. Shown under index title."
[params.work]
  jobTitle = "some"
  company = "Inria"
  companyUrl = "https://www.inria.fr/"
[params.gpg]
  key = "0xF788CE68916E6C39"
  fingerprint = "9C29 20E7 2B07 E195 4E38  52E4 F788 CE68 916E 6C39"
  link = "https://pgp.mit.edu/pks/lookup?op=get&search=0xF788CE68916E6C39"
```

### Code highlighting

Both highlight theme and lib can be overridden. Just drop your build in the `static/js` directory, and the theme file in the `static/css` directory.  
Note that the theme has to be named `highlight.css`.

### Customize styles

sass is required to build the theme css file. If [bundler](http://bundler.io/) is installed on your system:

```bash
bundle install

# test your changes
scss-lint scss/journal.scss

# build stylesheet
sass --scss --sourcemap=none themes/journal/scss/journal.scss themes/journal/static/css/journal.css
```
