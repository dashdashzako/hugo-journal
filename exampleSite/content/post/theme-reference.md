---
title: "Theme Reference"
description: "Description of the post"
date: 2017-07-23T16:20:16+02:00
draft: false
---

This is a post to help showing the _complete_ rules of this theme.

A **summary** is set, the rest is below a `<!-- more -->;` tag.<!--more-->

---

# Level 1 header

## Level 2 header

### Level 3 header

#### Level 4 header

##### Level 5 header

###### Level 6 header

[Markdown](http://daringfireball.net/projects/markdown/) syntax has multiple advantages over HTML for simple writing.

---

Blockquotes:

> Introducing Hugo, a new idea around making website creation simple again. Hugo flexibly works with many formats and is ideal for blogs, docs, portfolios and much more. Hugo’s speed fosters creativity and makes building a website fun again.
> <cite>spf13</cite>

---

Unordered lists:

- an item
- a second item
- a third item
- the first item

---

Ordered lists:

1. the winner
1. silver medal
1. bronze medal
1. copper medal
  1. an item
  1. another item
1. chocolate medal

---

Mixed list:

- Paris
  1. Les Invalides
      - Ligne 8
      - Ligne 12
  1. Le Louvre
- Bordeaux
  1. Le Miroir d'eau
  1. Le Grand Théâtre
- New York
  - Statue of Liberty
  - The Empire State Building

---

Image will not flow out its container.

![Jolly roger F14 aircraft](https://upload.wikimedia.org/wikipedia/commons/6/68/F-14-vf-84.jpg)

---

A `fig` shortcode can be used to create images figures.

```
src="image source"
alt="image alt"
caption="figure caption text"
link="link to the source"
```

{{< fig src="https://upload.wikimedia.org/wikipedia/commons/c/c7/YosemitePark2_amk.jpg" alt="Vue de la vallée de Yosemite" caption="Le Parc National de Yosemite" link="https://fr.wikipedia.org/wiki/Parc_national_de_Yosemite" >}}

---

<abbr title="abbreviation">Abbr</abbr> has default styles, so has the `kbd` tag <kbd>Ctrl+f</kbd>.

Theme uses [Highlight.js](https://highlightjs.org/) for code highlighting.

```python
from flask import Flask


# This is a long comment line. It is just here to prove we can type looooooong lines of texts without breaking the layout.
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
```
