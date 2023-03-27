<h1 id="add">: : APPLICATION DESIGN DOCUMENT : :</h1>

<br />

<h2 id="toc">: : TABLE OF CONTENTS : :</h2>

* [Table of Contents](#toc)
* [Purpose](#purpose)
* [Measured Goals](#measured-goals)
* [Standards](#standards)
  * [W3C](#w3c)
  * [Accessibility](#accessibility)
  * [Usability](#usability)
  * [User Experience (UX)](#user-experience)
  * [Things To Remember](#things-to-remember)
* [Governing Development Principles](#governing-development-principles)
  * [Intrinsic Design](#intrinsic-design)
  * [Least Power](#least-power)
  * [Separation of Concerns](#separaton-of-concerns)
  * [Perfect Storm](#perfect-storm)
* [Development Techniques](#development-techniques)
  * [Classess CSS](#classless-css)
  * [Semantic HTML Elements](#semantic-html-elements)
  * [Custom HTML Elements](#custom-html-elements)
  * [Responsive Design](#responsive-design)
  * [Progressive Enhancement](#progressive-enhancement)
  * [Minimal Third Party Dependencies](#minimal-third-party-dependencies)
  * [Squishy Layout](#squishy-layout)
  * [Self-Aware](#self-aware)
  * [Customization](#customization)
* [Style Guide](#style-guide)
  * [Color Themes](#color-themes)
  * [Corporate Branding](#corporate-branding)
* [Architecture](#architecture)
  * [JAMstack](#jamstack)
  * [HTML/CSS](#html-css)
  * [JavaScript Rules Engine](#javascript-rules-engine)
* [Single Page Application (SPA)](#single-page-application)
  * [Perspective](#perspective)
  * [Level Of Effort (LoE)](#loe)
  * [Alternate Layouts](#alternate-layouts)
* [Progressive Web Application (PWA)](#pwa)
  * [Cross Platform Interoperability](#cross-platform-interoperability)
  * [Immersive Experience](#immersive-experience)
  * [Progressively Enhanced](#progressively-enhanced)
  * [It's A Desktop App](#its-a-desktop-app)
  * [It's A Website](#its-a-website)
  * [Advantages](#advantages)
* [Browser Compatibility](#browser-compatibility)
* [Directory Structure](#directory-structure)

<br />

<h2 id="purpose">: : PURPOSE : :</h2>

<br />

The purpose and intent of this document is to preserve and promote foundational web industry development and O&M best practices as well as W3C/WHATWG standards compliance for the betterment, health, and longevity of D7460N and those who would use it for their businesses. 

<br />

---

<br />

<h2 id="measured-goals">: : MEASURED GOALS : :</h2>

<br />

All issues and metrics are driven (at least in part) by JIRA and Lighthouse and are mapped/referenced (linked) MEASURED GOALS by their [ ? ] numbers. 

<br />

<table>
  <tr>
    <td><b>GOAL</b> (** WIP **)</td>
    <td><b>MEASURE</b> (** WIP **)</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">1</a> ] Do no harm.<br />Minimize impact on legacy project O&M development timeline/schedule to </td>
    <td>0</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">2</a> ] Reduce digital footprint by </td>
    <td>75%+</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current company GUI digital footprint = </td>
    <td>1.64MB</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current D7460N GUI digital footprint = </td>
    <td>112k</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Digital footprint reduction of</td>
    <td>1464%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">3</a> ] Increase load performance by</td>
    <td>200%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current company load performance = </td>
    <td>5000ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current D7460N laod performance = </td>
    <td>200ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Load performance increase of</td>
    <td>700%</td>
  </tr>
  <tr></tr>
</table>










