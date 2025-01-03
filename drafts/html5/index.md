---
title: HTML5 — What and Why
cover: ""
date: "2015-10-22"
category: html
slug: html5-features
tags:
  - latest-html-version
  - html5-apis 
---
HTML stands for HyperText Markup Language — so it is a markup language and HTML5 is the latest version of it.

## What HTML Does (actually)?
HTML renders content in the browsers like Chrome and Firefox – which mostly with the support of a CSS to add a presentation layer, yet, can go standalone as well. To simplify, the browser takes instructions as HTML markups and displays the result to the end-user.

###### **Thoughtful Reading**: 
* (Internal) <a href="#" target="_blank">CSS - What and Why</a>

<br>

I first came to know about HTML5 in early 2012 and then I started digging into it. Until then I was very much happy with the earlier versions – XHTML or HTML 4.01.

## Why to Consider HTML5?
HTML5 is a <a href="//www.w3.org/blog/news/archives/4167#:~:text=The%20HTML%20Working%20Group%20today,of%20the%20Open%20Web%20Platform." target="_blank">W3C recommendation</a> since 2014 and hence all the major browsers would have support for the same. So, as a developer, if your code is proper HTML5 markups then there is very little chance of getting browser-compatibility issues soon.

Next, I would like to present a list of the features that are popular among developers.

## HTML5 – Good Things
1. [The Doctype](#1-the-doctype)
2. [Semantic Elements](#2-semantic-elements)
3. [Data Attributes](#3-data-attributes)
4. [Form Improvements](#4-form-attributes)
5. Storage APIs
6. Output Element

### 1. The Doctype
It was a little tough to remember the doctype syntax for the earlier versions compared to the HTML5 simplified doctype. But, there was a support of auto-generated snippets available in most of the IDE of that time (i.e. Dreamweaver).

<br>
<em>
<strong>Tip</strong>: What happens to a webpage without any doctype?
<br>

<small>Well simple – the browser goes into a quicks mode and behave little odd ways. Might some of the features stop working. So always remeber to add a doctype in an HTML page you develop.</em></small> 
<br>
<br>

#### <small>1.1</small> Example
```html
<!-- now - shorter -->
<!DOCTYPE html>

<!-- then - longer -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```
<small>&#8593; [Back to **HTML5 – Good Things**](#html5--good-things)</small>


### 2. Semantic Elements
In earlier versions of HTML, we had to use `div` everywhere. This sometimes becomes complex to read for a lengthy page. However, there is an option for a developer to put `id` or `class` attribute over a `div` element. At some point, this technic improves the readability but not fully.

HTML5 has introduced many semantic elements. Semantic elements describe the clear meaning of element being used for. So as a developer scanning the code would become simpler. Now you would understand the purpose of a written code just by seeing at it and yes, can also avoid putting a descriptive comments for code-block defined with semantic tags.

Below are a few of the popular semantic elements in HTML5:

* main
* section
* article
* aside
* header
* footer
* nav

#### <small>2.1</small> Example usage of semantic elements
```html
<header>
  <nav>
    <!-- nav content -->
  </nav>
</header>

<main>
  <section>
    <article>
      <!-- content -->
    </article>
  </section>
</main>

<footer>
  <!-- footer content -->
</footer>
```
<small>&#8593; [Back to **HTML5 – Good Things**](#html5--good-things)</small>


### 3. Data Attributes
Data attributes are special attributes that start with `data-`. This used to store page related data for a web page and the same can be manipulated later with the use of JavaScript. `data-` attribute is also use to add specific styling.

The popular use of `data-` attribute can be creating a functional tooltip without JavaScript.

###### **Thoughtful Reading**: 
* (Internal) <a href="#" target="_blank">Understand HTML5 Data Attributes with In-depth Examples</a>

#### <small>3.1</small> HTML syntax 
```html
<article data-id="1" data-category="html" data-type="post">
  <!-- content -->
</article>
```

#### <small>3.2</small> CSS use
```css
article[data-category='html']{
  background-color: orange;
  color: #fff;
}
```

#### <small>3.3</small> Accessing through JavaScript
```javascript
// getting data-attribute value
element.getAttribute("data-category");

// setting data-attribute value
element.setAttribute("data-category", "other-category");
```
<small>&#8593; [Back to **HTML5 – Good Things**](#html5--good-things)</small>


### 4. Form Improvements
Forms are an integral part of any website or web application, which is used to take inputs from end-user.

In HTML5, there are many useful attributes and iput-types are introduced. Below, I would like to mention a few that I used the most.

* Placeholder
* Required
* Input Types, i.e.: number, range, date, color, etc.

#### <small>4.1</small> Placeholder
Earlier we had to pass some <em>value</em> or <em>the label text</em> with the `input` element to recognize the purpose of it. I know, we all have used that focus-blur  JavaScript to get the cool placeholder effect.

But now the similar effect we can achieve without adding any JavaScript. HTML5 form has now an attribute called `placeholder` which renders soft text for `input`.

<small>Note: The word **soft text** is how I remember the placeholder text effect which disappears on user focuses and comes back on the keypress event. Nothing to do with technical terminology.</small>

<small>**Example:**</small>
```html
<input type="text" placeholder="placeholder text...">
```
<blockquote>

<small>**Output:**</small>

<input type="text" placeholder="placeholder text...">

</blockquote>

#### <small>4.2</small> Required
`required` is another form attribute that tells the form that user-input for this particular input is required without which the form cannot be submitted. 

This attribute can be applied to `select` and `textarea` as well.

<small>**Example:**</small>

```html
<input type="text" required>

```

#### <small>4.3</small> Input Types
Before few years, `type="text"` was the only available type for the input. Now, in HTML5, there are numbers of useful types like `number`, `range`, `date`, etc. are available which makes the data input easy and smooth.

```
<!-- number -->
<input type="number">

<!-- range -->
<input type="range">

<!-- date -->
<input type="date">
```

*<small>Follow the [Deep Reading](#deep-reading) section to read more about Form Additions in HTML5.</small>*

<small>&#8593; [Back to **HTML5 – Good Things**](#html5--good-things)</small>


###### **Deep reading**:
* (W3C) <a href="//www.w3.org/TR/html5-diff/" target="_blank">HTML5 Differences from HTML4</a>
* (W3C) <a href="////www.w3.org/wiki/HTML5_form_additions?source=post_page---------------------------" target="_blank">HTML5 form additions</a>


