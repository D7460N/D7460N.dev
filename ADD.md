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
    <td>200%+</td>
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
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">4</a> ] Increase render performance by</td>
    <td>200%+</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current company render performance = </td>
    <td>5000ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current D7460N render performance = </td>
    <td>200ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Load render increase of</td>
    <td>700%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">5</a> ] Reduce dependencies to <br />
     Current company is dependent on Bootstrap 3 which is dependent on jQuery</td>
    <td>0</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">6</a> ] Reduce continuitity LoE by </td>
    <td>50%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">7</a> ] Ensure mission continuity at minimum cost and LoE</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">8</a> ] Ensure end-user ease of use. (Usability)</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">9</a> ] Ensure developer ease of use. (Usability)</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">10</a> ] Ensure accessibility as defined by accessibility.gov</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">11</a> ] Conform to company goals and themes</td>
    <td>&#160;</td>
  </tr>
</table>

<br />

---

<br />

<h2 id="standards">: : STANDARDS : :</h2>

<br />

<h3 id="w3c">: : W3C/WHATWG : :</h3>

[^1] The best way for websites and or web applications to stay compatible with the FUTURE is to stay compatible with web browsers. The best way to stay compatible with web browsers is to be W3C/WHATWG standards compliant.

The company website will be accessible on any device with an authorized network connected web browser from anywhere in the world.<br />`[ company goal ]`

<br />

<h3 id="accessibility">: : ACCESSIBILITY : :</h3>

**ACCESSIBILITY IS NOT USABILITY**. A screen full of unstructured unformatted unstyled data is accessible, but hardly usable. Accessbility is the beginning of usability best practices. 

> <i>"Whereas accessibility relates to the technical side of a website, usability relates to the quality of a person's experience when interacting with your website, the efficiency with which that person can accomplish a task, and the satisfaction of the person completing the task. Although accessibility guidelines focus primarily on people with disabilities and impairments, such as vision loss, many of the guidelines for accessibility can also improve usability for all.</i><br />~ Aug 22, 2022 - UsableNet

<br />

<h3 id="usability">: : USABILITY : :</h3>

For many end-users, the difference between Apple and Microsoft is design over function (respetively). For many developers, the inevitable form/function fork on their development roadmap determines whether a web application succeeds or fails. 

End-user and developer accessibility and usability goversn every company design development decision. 

> <i>If "content is king", then the GUI is his castle, usability is the road that leads you there, and accessibility is the key to enter his royal court."</i><br />~ Unknown

<br />

<h3 id="user-experience">: : USER EXPERIENCE (UX) : :</h3>

(WIP) User experience (UX) is where accessibility and usability come together. UX encompasses what happens from the time the user enters the web application URL to when they click the upper right hand corner "X" to cloase the web application and beyond. 

What happens when users come back?
* Is the web application just as fast or faster?
* Does the web application remember where the user left off?
* Does the web application handle user OS preferences?
* Keyboard preferences?
* Mouse preferences?
* Do end-users like roomy or condensed content?
* Do end-users like useful/helpful micro-transation animations or no animations?
* What happens to the web application if an end-user disables JavaScript?

<img src="/assets/images/ux3d.svg#gh-dark-mode-only" alt="UX is where accessibility and usability come together." width="600" title="UX is where accessibility and usability come together." />
<img src="/assets/images/ux3d.svg#gh-light-mode-only" alt="UX is where accessibility and usability come together." width="600" title="UX is where accessibility and usability come together." />

<br />

<h3 id="things-to-remember">: : THINGS TO REMEMBER : :</h3>

* **No dead ends** - Privide end-users and obvious way forward and a way back. A way forward example would be, links to support desk on `404` pages. A way back example would be a consistent visible "anchor" to the web application home page such as the conventional web application logo in the upper left corner. 
* **Link Offsite References** - Whenever an offsite source is reference, link to the reference. 
* **Off-site links open in new browser tab/window** - Open off-site links in a new browser tab or window with `target="_new"`.
* **Use `text-wrap="medium"` - (WIP)
* **Use `:focus-visible;`** - rather than just `:focus`. This allows for more accurate visible keyboard tabbing through inputs and buttons. 
* **Use `outline-color: transparent;`** - rather than `:none;` so as to not turn off accessibility features.
* **Use semantic custom HTML tags** - for non-layout/structural elements.
* **Use `prefers-reduced-motion`** - for animated and transitioned elements to allow the GUI to obey end-users OS level preferences. 
* **Use SVG format whenever possible** - so that they will dynamically/programatically change colors with the contextual theme and maintain accessibility contrast standard ratios. SVGs are alos extremely light weight and can be _inlined_ with the HTML.

<br />

HTML : :
```html
<p>
  This is a paragraph with an
  <a href="https://off-site-list.html" target="_new">off-site-link</a>.
</p>
```

<br />

---

<br />

<h2 id="principles">: : GOVERNING DESIGN/DEVELOPMENT PRINCIPLES : :</h2>

<br />

<h3 id="intrinsic-design">: : INTRINSIC DESIGN : :</h3>

Coinded by Jen Simmons, Intrinsic design is the idea of useing modern CSS (generally Flexbox or Grid) solutions to give the browser enough information to decide when the layout will shift to a different layout instead of having to hard-code things yourself. Not only does it mean we're not left guessing what break-points things would shift at ourselves, but it also means that we're able to write less code and generally make more maintainable and adaptable solutions. 

<br />

<h3 id="least-power">: : LEAST POWER : :</h3>

D7460N leverages the "Least Power" principle in that D7460N is purposely simple and easy to understand, not just for the end-user to user, but also for developers to develop. Why pay a team of highly trained experts to host, maintain, compile, and otherwise manage the latest monstrous JS framework and all its (possibly insecure) third party dependencies when all you need is a couple of developers to know and edit vanilla HTML, CSS, and JavaScript?

The D7460N GUI runs natively in the browser with no dependencies, it requires:
* no building
* no compiling
* and no serving

<br />

<h3 id="separation-of-concerns">: : SEPARATION OF CONCERNS : :</h3>

D7460N also follows the "separation of concerns" principle.

