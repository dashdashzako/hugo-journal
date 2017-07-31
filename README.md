# Journal

_Journal_ is a minimalist theme for [Hugo](http://gohugo.io), forked from [Damien](https://github.com/damiencaselli/hugo-journal/issues) who has a [demo](https://damiencaselli.github.io/hugo-journal-demo/).

## Installation

Please refer to the [Hugo documentation](http://gohugo.io/themes/installing/).

## Configuration

The following parameters can be adjusted in the site config:

```toml
[author]
  maillocal = "mail localpart only (reader needs to complete address)"
  occupation = "goes after the author's name (or use params.work)" 
[params]
  description = "Blog meta description."
  githubUsername = "your_gh_username"
  twitterUsername = "your_twitter_handle"
  mastodon = "your mastodon user url"
  tagline = "Blog tagline. Shown under index title."
[params.work]
  jobTitle = "occupation"
  company = "the company"
  companyUrl = "https://the.company.url/"
[params.gpg]
  key = "0x1111111111111111"
  fingerprint = "0000 0000 0000 0000 0000  0000 0000 0000 0000 0000"
  link = "https://pgp.mit.edu/pks/lookup?op=get&search=0x1111111111111111"
```

### Code highlighting

Both highlight theme and lib can be overridden. Just drop your build in the `static/js` directory, and the theme file in the `static/css` directory.  
Note that the theme has to be named `highlight.css`.

### Customize styles

sass is required to build the theme css file:

```bash
# test your changes
scss-lint scss/journal.scss

# build stylesheet
sass --scss --sourcemap=none scss/journal.scss static/css/journal.css
```
