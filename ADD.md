<h1 id="add">: : APPLICATION DESIGN DOCUMENT : :</h1>

<br />

<h2 id="toc">: : TABLE OF CONTENTS : :</h2>

* [Table of Contents](#toc)
* [Purpose](#purpose)
<!-- * [Measured Goals](#measured-goals) -->
* [Standards](#standards)
  * [W3C](#w3c)
  * [Accessibility](#accessibility)
  * [Usability](#usability)
  * [User Experience (UX)](#user-experience)
  * [Things To Remember](#ux-to-remember)
* [Governing Development Principles](#principles)
  * [Intrinsic Design](#intrinsic-design)
  * [Least Power](#least-power)
  * [Separation of Concerns](#separation-of-concerns)
  * [Perfect Storm](#perfect-storm)
* [Development Techniques](#development-techniques)
  * [Classess CSS](#classless-css)
  * [Semantic HTML Elements](#semantic-html-elements)
  * [Custom HTML Elements](#custom-html-elements)
  * [CSS Variables](#css-variables)
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
  <!-- * [JavaScript Rules Engine](#javascript-rules-engine) -->
* [Single Page Application (SPA)](#spa)
  * [Perspective](#perspective)
  * [Alternate Layouts](#alternate-layouts)
* [Progressive Web Application (PWA)](#pwa)
  * [Cross Platform Interoperability](#cross-platform-interoperability)
  * [Immersive Experience](#immersive-experience)
  * [Progressively Enhanced](#progressively-enhanced)
  * [It's A Desktop App](#desktop-app)
  * [It's A Website](#website)
  * [Advantages](#advantages)
* [Security](#security)
* [Browser Compatibility](#browser-compatibility)
* [Directory Structure](#directory-structure)

<br />

<h2 id="purpose">: : PURPOSE : :</h2>

<br />

This document presents guidelines and standards for web development, as well as operations and maintenance (O&M). The objective is to enhance and sustain the performance and lifespan of the D7460N template, ultimately benefiting its users. 

<br />

---

<!-- <h2 id="measured-goals">: : MEASURED GOALS : :</h2>

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

<br /> -->

<br />

<h2 id="standards">: : STANDARDS : :</h2>

<br />

<h3 id="w3c">: : W3C/WHATWG "LIVING" STANDARD : :</h3>

[^1] To ensure future compatibility for websites or web applications, adherence to W3C/WHATWG standards is crucial. Additionally, accessibility across any device equipped with an authorized network-connected web browser, from any location worldwide, is key.<br />`[ company goal ]`

<br />

<h3 id="accessibility">: : ACCESSIBILITY : :</h3>

Accessibility relates to the technical side of a website, while usability refers to the quality of a person's experience when interacting with it. Accessibility guidelines can improve usability for all users, including those with disabilities or impairments.

**ACCESSIBILITY IS NOT USABILITY**. A screen full of unstructured unformatted unstyled data is accessible, but hardly usable. Accessbility is the beginning of usability best practices. 

> <i>"Whereas accessibility relates to the technical side of a website, usability relates to the quality of a person's experience when interacting with your website, the efficiency with which that person can accomplish a task, and the satisfaction of the person completing the task. Although accessibility guidelines focus primarily on people with disabilities and impairments, such as vision loss, many of the guidelines for accessibility can also improve usability for all.</i><br />~ Aug 22, 2022 - UsableNet

<br />

<h3 id="usability">: : USABILITY : :</h3>

For many end-users (not all), the difference between Apple and Microsoft is design over function (respetively). For many developers (not all), the inevitable form/function fork on their development roadmap determines whether a web application succeeds or fails. 

End-user **and** developer accessibility and usability governs every design development decision. 

> <i>If "content is king", then the GUI is his castle, usability is the road that leads you there, and accessibility is the key to enter his royal court."</i><br />~ Unknown

<br />

Links:<br/>
[Guidance on building better digital services in government.](https://digital.gov/)<br />
[Government-wide Section 508 Assessment](https://www.section508.gov/)<br />
[WCAG 2 Overview | Web Accessibility Initiative (WAI) - W3C](https://www.w3.org/WAI/standards-guidelines/wcag/)<br />
[Guidance on Web Accessibility and the ADA](https://www.ada.gov/resources/web-guidance/)

<br />

<h3 id="user-experience">: : USER EXPERIENCE (UX) : :</h3>

User Experience (UX) is the intersection of accessibility and usability. It encapsulates the entire journey of a user, from the moment they input the web application's URL, to the point they click the "X" in the upper right corner to close the application, and even beyond. 

Such as:
* What happens when users come back?
* Does the web app remember the user?
* Is the web application just as fast or faster when end-users return?
* Does the web application remember and return the user where the user left off?
* What happens to the web application if an end-user disables JavaScript?

What if end-users could easily customize the web application to make it their own? 

Such as:
* Does the web application handle user OS preferences, such as:
  * Color and contrast preferences?
  * Keyboard preferences?
  * Mouse preferences?
  * Roomy or condensed content preferences?
  * Do end-users like useful/helpful micro-transation animations or no animations?
  

<!-- <img src="/assets/images/ux3d.svg#gh-dark-mode-only" alt="UX is where accessibility and usability come together." width="600" title="UX is where accessibility and usability come together." />
<img src="/assets/images/ux3d.svg#gh-light-mode-only" alt="UX is where accessibility and usability come together." width="600" title="UX is where accessibility and usability come together." /> -->

<br />

<h4 id="ux-to-remember">: : UX TO REMEMBER : :</h4>

* **No dead ends** - Privide end-users and obvious way forward and a way back. A way forward example would be, links to support desk on `404` pages. A way back example would be a consistent visible "anchor" to the web application home page such as the conventional web application logo in the upper left corner. 
* **Link Offsite References** - Whenever an offsite source is reference, link to the reference. 
* **Off-site links open in new browser tab/window** - Open off-site links in a new browser tab or window with `target="_new"`.
* **Use `text-wrap="medium"` - (WIP)
* **Use `:focus-visible;`** - rather than just `:focus`. This allows for more accurate visible keyboard tabbing through inputs and buttons. 
* **Use `outline-color: transparent;`** - rather than `:none;` so as to not turn off accessibility features.
* **Use semantic custom HTML tags** - for non-layout/structural elements.
* **Use `prefers-reduced-motion`** - for animated and transitioned elements to allow the GUI to obey end-users OS level preferences. 
* **Use SVG format whenever possible** - SVGs are extremely light weight and can be _inlined_ with the HTML.
* **Use `mix-blend-mode` with SVGs** whenever possible - This enables SVGs to be controlled dynamically/programmatically and ensures accessibility color contrast ratio of at least 1:4, regardless of the color theme. 

<br />

Offsite link HTML example : :
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

Intrinsic Design is a principle introduced by Jen Simmons at an "Event Apart" event in 2019 titled, [Everything you know about web design has just changed](https://www.youtube.com/watch?v=jBwBACbRuGY). 

Most developers use CSS to control and or lockdown their web UIs. Intrinsic design leverages modern design engineering techniques, fueled by new(<i>er</i>) CSS functionality such as `Grid`, `Flexbox`, `:has()`, `custom-properties(variables)`, and `container-queries` that allow web UIs to **intrinsically** or **naturally** or **natively** present content on it's own. Instead of gues-timating `break-points` with hard-coded units, Intrinsic design allows the browser to naturally determine content placement. This approach minimizes code complexity and fosters more maintainable and adaptable solutions. 

Almost as if the web UI is [SELF-AWARE](#self-aware)...

<br />

<h3 id="least-power">: : LEAST POWER : :</h3>

The "Least Power" principle simplifyies the codebase and development workflow processes.

> "<i>Many Web technologies are designed to exploit the Rule of Least Power. HTML is intentionally designed not to be a full programming language, so that many different things can be done with an HTML document: software can present the document in various styles, extract tables of contents, index it, and so on. Similarly, CSS is a declarative styling language that is easily analyzed. The Semantic Web is an attempt, largely, to map large quantities of existing data onto a common language so that the data can be analyzed in ways never dreamed of by its creators.</i>"<br />
[W3C - Web Technologies and the Rule of Least Power - 2001](https://www.w3.org/2001/tag/doc/leastPower.html)

The Least Power Principle allows developers to more easily separate data or business logic (JavaScript) form GUI logic (HTML/CSS). See [SEPARATION OF CONCERNS](#separation-of-concerns).

Since the D7460N Template separates the HTML and CSS from the JavaScript, it runs natively in the browser with no servers requiered:
* no building
* no compiling
* and no serving

<br />

<h3 id="separation-of-concerns">: : SEPARATION OF CONCERNS : :</h3>

The D7460N template also follows the "separation of concerns" principle. That is, in the D7460N Template, most (if not all) scripting is separate from the CSS and HTML. This creates an "air gap" between the two, affectively separating the GUI logic (commonly followed design patterns and conventions coupled with ADA accessibility and usability guidelines) from the (application specific) business logic, allowing for BOTH to be independently developed, operated, and maintained. 

Decoupleing GUI logic from business logic allows the D7460N template to be:
* data agnostic
* JS framework agnostic - see [WEB COMPONENTS](#web-components)
* Scalable
* Modular
* Independent

<br />

<h3 id="web-application-firewall">Web Application Firewall</h3>
(WIP)

<br />

<h3 id="web-components">Web Components (native)</h3>
(WIP) Allows for JS framework independence, nuetrallity, flexibility. If <b>Angular</b> or <b>Vue.js</b> is no longer "the thing", and the team feels they want to switch to <b>React</b>, you can with the D7460N Template because it is compatible with all web standards compliant JS frameworks. 

<br />

<br />

<h3 id="perfect-storm">: : PERFECT STORM : :</h3>

**The D7460N Template is a perfect storm of opportunities to affect and inspire positive change** in that it is...

* an enterprise level web application = _high profile_
* used by tens of thousands of end-users across multiple companies = _wide exposure_
* used multiple times per day = _will be noticed if made attractive and enjoyable to use_
* used for hundreds of thousands of documents and email = _will increase productivity if made fast and easy enough to use_
* static (no dynamic data/no databases) = _removed barriers and enables capabilities not otherwise possible with dynamic applications_
* Today's modern browsers (not you IE!) now natively do what JavaScript frameworks built to overcome years ago = _technically, JavaScript frameworks are now pure technical debt, fated to eventually go the way of Flash, ActionScript, Ext.js, and the Dodo Bird. 

<br />

<h3 id="css-first">: : CSS FIRST : :</h3>

Stongly hinted in the [Least Power](#least-power) section, but bears emphasising... _What can't be done in HTML is done in CSS_.

How do you create a modern future-proofed web presense that is more accessible and more enjoyable with less effort, less time, and less resources?

FUTURE PROOF : :<br />
As one of the three languages web browsers nately understand, CSS is not going away any time soon. The CSS I wrote ten years ago still works today and will work in another 10 years. 

FAST : :<br />
CSS is 100 to 1K times faster than JavaScript equivelents. 

LIVE : :<br />
CSS's always on, alway live nature combined with newly enable functionality, allows for web UIs to be "intelligently interactive". 

CSS is the driving force behind D7460N design and developement. Scripting is purposely minimal so as to avoid negating the natural benefits of such CSS central design and developemnt. This focus on CSS is neither custom nor new. It is actually the original intent and how CSS was created to work. 

<br />

---

<br />

<h2 id="development-techniques">: : DESIGN/DEVELOPMENT TECHNIQUES : :</h2>

<br />

<h3 id="classless-css">: : CLASSLESS CSS : :</h3>

Classless CSS is a development technique that lets developers define default layout and form elements in the CSS without needing to use class selectors or "hooks" in the HTML, reducing page size and keeping the HTML clean.

<br />

<h3 id="semantic-html-elements">: : SEMANTIC HTML ELEMENTS : :</h3>

Web accessibility and usability utilize semantic structural HTML. Semantic structural HTML lays the foundation upon which assistive and other technologies leverage, build, and operate successfully. 

HTML : :
```html
<header></header>
<nav></nav>
<main>
  <section></section>
  <article></article>
</main>
<aside></aside>
<footer></footer>
```

<br />

<h3 id="custom-html-elements">: : CUSTOM HTML ELEMENTS : :</h3>

Custom HTML elements are alphanumeric phrases separated by hyphens that are used to extend HTML with semantic meaning, reduce digital bloat, and provide development hooks in-leu-of CSS classes (see [Classless CSS](#classless-css).

[Custom Elements Without JavaScript?](https://blog.jim-nielsen.com/2021/custom-elements-without-js/) - Jim Nielson's Blog

HTML : :
```html
<app-container>
  <app-panel>
    <panel-list>
      <list-item>
        <list-cell>List item 01 column 01</list-cell>
        <list-cell>List item 01 column 02</list-cell>
        <list-cell>List item 01 column 03</list-cell>
        <list-cell>List item 01 column 04</list-cell>
        <list-cell>List item 01 column 05</list-cell>
      <list-item>
      <list-item>
        <list-cell>List item 02 column 01</list-cell>
        <list-cell>List item 02 column 02</list-cell>
        <list-cell>List item 02 column 03</list-cell>
        <list-cell>List item 02 column 04</list-cell>
        <list-cell>List item 02 column 05</list-cell>
      <list-item>
      <list-item>
        <list-cell>List item 03 column 01</list-cell>
        <list-cell>List item 03 column 02</list-cell>
        <list-cell>List item 03 column 03</list-cell>
        <list-cell>List item 03 column 04</list-cell>
        <list-cell>List item 03 column 05</list-cell>
      <list-item>
    </panel-list>
  </app-panel>
</app-container>
```

<br />

<h3 id="css-variables">: : CSS VARIABLES : :</h3>

(WIP) (WIP) (WIP) (WIP) (WIP) (WIP) (WIP) (WIP) (WIP) (WIP) (WIP) (WIP) 

<br />

<h3 id="responsive-design">: : RESPONSIVE DESIGN : :</h3>

Responsive or adaptive web design provides optimal experience, easy reading, and easy navigation with a minimum of resizing on difference media devices such as desktops, laptops, tablets, and phones. D7460N work on every device, and every screen size, no matter how large or small. `[ company goal ]`

<br />

<h3 id="progressive-enhancement">: : PROGRESSIVE ENHANCEMENT : :</h3>

**Progressive Enhancement** is a design philosophy that provides a baseline of essential content and functionality to as many users as possible, while delivering the best possible experience only to users of the most modern browsers that can run all the required code. 

The word _progressive_ in _progressive enhancement_ means creating and design that achieves a simpler-but-still-usable experience for end-users of older browsers and devices with limited capabilities, while at the same time being a design the **professes the user experience** to a more compelling, fully-featured experience for users of new browsers and devices with richer capabilities. 

Feature detection is generally used to determine whether browsers can handle more modern functionality, while pollyfills are often used to add missing features with JavaScript. 

**Progressive Enhancement** is a useful technique that allows web developers to focus on developing the best possible webistes while making websites work multiple unkown user agents. **Graceful degradation** is related but not the same thing and is often seen as going in the opposite direction to progressive enhancement. In reality, both approaches are valid and can often compliment one another.<br />
~ https://developer.mozilla.com/en-US/docs/Glassary/Progressive_Enhancement/

CSS : :
```css
awaiting responsive code snippet
```

<br />

<h3 id="minimal-third-party-dependencies">: : MINIMAL THIRD PARTY DEPENDENCIES : :</h3>

Third party dependencies such as JS libraries like jQuery, EXT.js, Prototype.js and JavaScript frameworks like Angular, Vue, and React are helpful for when browsers don't support needed functionality natively and for launching features and or entire software projects quickly. 

This party dependencies are also the eventual _death-knell_ of every software feature or software project I've even been on. 

This is because third party dependencies are subject to dissassociate unwhitting third party developers with competing priorities, schedules, and security concerns. 

Third party dependencies often force development decisions down inflexible "happy paths" to work as needed eventually leading to compromized or limited developement and or feature options in the near and or long term. 

Additional third party software and build processes (themselves dependent on third party software) are necessary to track, sync, and keep third party dependencies up-to-date. Even so, if one dependency doesn't maintain their code, all other dependents can't move forward. A project depending on dozens of of third, fourth, and even fifth party dependencies may get up and running quickly, but will eventually grind to a screaching halt and need to be rebuilt from scratch. 

<br />

<h3 id="squishy-layout">: : SQUISHY LAYOUT : :</h3>

D7460N leverages a **3 STOP** layout technique using native HTML and CSS that allows for dynamic functionality normally relegated to and implimented with JavaScript. This technique maximizes layout flexibility, [RESPONSIVEness](#responsive-design), and sets the ground work for [end-user customizetin options](#customization). All while avoiding declaring, poling, or otherwise calculating heights and or widths throughout the GUI with slower JavaScript. 

<br />

<h4>: : STEP 1 : :</h4>

Rather than setting height on any other DOM elements, set inner most child DOM elements padding (such as buttons and form elements) to `padding: 1rem;`. This allows the DOM elements that govern interaction and content to grow on their own up to the height of the browser minus layout structuraly wrapper DOM elements - which leads to ** STEP 2**.

<h4>: : STEP 2 : :</h4>

Set the layout/structure HTML DOM wrapper element `<app-container>` to `height: 100vh;`. This pushed the layout/structural layout HTML DOM elements, such as `<header>`, `<app-container>`, and `<footer>` to vertically fill the entire browser which allows the remaining middle space to naturally adjust and natively scroll when overflowing content.

<h4>: : STEP 3 : :</h4>

Set all descendent HTML DOM elements that do not adjust or scroll when overflowing to `overflow: hidden;`, and set the DOM elements that should adjust or scroll when overflowing to `overflow: auto;`. 

For example, in D7460N's case, that would be : :

HTML : :

```html
<html>          <!-- set to overflow: hidden; -->
  <body>          <!-- set to overflow: hidden; -->
    <app-container> <!-- set to overflow: hidden; -->
      <main>          <!-- set to overflow: hidden; -->
        <ul>            <!-- set to overflow: auto; -->
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
          <li>List item five</li>
        </ul>
      </main>
    </app-container>
  </body>
</html>
```

`<html>`, `<body>`, `<app-container>`, and `<main>` are all set to `overflow: hidden;`. Only `<ul>` is set to `overflow: auto;`

<br />

CSS : :
```css
html,
body,
app-container,
main {overflow: hidden;}

ul {overflow: auto;}
```
This technique:
* allows for layout for overflow content natively with no JavaScript
* sets up browser native behavior for variable height content _(no more expensive JavaScript poling for element height)_
* allows for sticky header and footer without extra slower JavaScript workarounds

<br />

<h3 id="self-aware">: : SELF-AWARE : :</h3>

(WIP) What if a web GUI could natively (no third party plug-ins or dependencies) know what is happening inside it, when it happens, and what to do about it? All without JavaScript? 

It would : :
* revolutionize web design/developement as we know it. Web GUIs would largely run themselves, making decisions about how they behave depending on the data (data/business logic) occuring inside them
* split web design/development in half along the "separation of concerns" divide so sharply and completely that buttons would do nothing but fetch data 
* work with JavaScript disabled (pure CSS), the "Holy Grail" of [Accessibility](#accessibility)
* result in automated templates for designers, far less code logic for developers, smaller digital footprint, and a much richer experience for end-users

CSS has been able to watch for things (selectors) and act on that selector for years. With the introduction of `:has()`, CSS can now watch and act on OTHER selectors and even parent selectors. This opens up CSS capabilities limited only by our imagination. 
<br />
Container Queries 
<br />
Style Queries 
<br />
Counting Queries 
<br />

<br />

<h3 id="customization">: : CUSTOMIZATION : :</h3>

Allow end-users to feel like they can make D7460N their own, through customization options. 

Customization options : :
* System/dark/light/high-contrast modes
* Data/text size
* Data-text density (spacious, comfortable, compact)
* Save cross session

<br />

---

<br />

<h2 id="style-guide">: : STYLE GUIDE : :</h2>

<br />

<h3 id="color-themes">: : COLOR THEMES : :</h3>

D7460N color themes are independent from the GUI and are set via [CSS Variables](#css-variables). Light and dark version are provided for each color theme. 

Absolute black `#000000` and absolute white `#FFFFFF` are reserved colors for accent, shading, and light angle perspecives.

Base theme : :
```css
awaiting base theme CSS
```

<br />

<h3 id="corporate-branding">: : CORPORATE BRANDING : :</h3>

LOGO : :

The D7460N logo conforms to the following requirements : :
* Convey or represent the idea, purpose, and or action of the web application
* Two at most, (preferably one) reversable colors (light/dark themes)
* Readable (text based)/recognizable (symbol based) at small (16x16px), and large (poster) sizes
* Lossless visual quality when resizing
* Dynamically maintain web application color scheme 
* Dynamically maintain ADA accessibility contrast standard
* No historical context
* No political context
* No relational context
* No copyright

> <span id="logo-note">NOTE : : Accessibility requirements do not apply to logos and or incidental graphics (https://accessiblity.digital.gov/visual-design/color-and-contrast/), but is nevertheless best practices for [Usability](#usability). 

<br />
 
The D7460N logo changes color dynamically depending on on it's background-color so as to maintain the contextual theme and standard accessibility contrast ratio of `4.5:1`. The color of `#999999` (seen below) is defaulted as a safe fallback color that works in both light and dark themes. Note: (see [Accessibility](#accessibility) note above).

<br />

---

<br />

<h2 id="architecture">: : ARCHITECTURE : :</h2>

<br />

<h3 id="jamstack">: : JAMStack : :</h3>
 
(WIP) D7460N is a static Single Page Application (SPA) GUI with a JAMStack architecture, mainly for front-loading static resources. 

<br />

<h3 id="html-css">: : HTML/CSS : :</h3>
 
To separate and isolate GUI logic from business logic, the D7460N GUI is strictly separated into two exclusive halves. The HTML/CSS (GUI logic) and JavaScript (business logic).
 
There should be minimal to no JavaScript in the HTML. What scripting that is there in the HTML is to assist/enhance/pollyfill the GUI logic. Even so, it is done so as to not slow down the 100 to 1000 times faster CSS.
 
This works hand-in-hand with other utilized techniques to create an "air gap" between the two to allow each to benefit from modularity and independence. They can be worked on in parallel or in tandem without directly affecting the other. 
 
This decoupling allows for future GUI updates to be "refaced" not "replaced".

This also enforces a developemtn strategy on either side to remain exclusive and thus remain modular and minimally connected. 

The two halves are connected only via the IDs in the static (JAMStack) front-loaded HTML. 
 
... (WIP)
 
<br />

---

<br />

<h2 id="spa">: : SINGLE PAGE APPLICATION : :</h2>

<br />

<h3 id="perspective">: : PERSPECTIVE : :</h3>
 
Single Page Applications are defined differently depending on context. In web design/layout world, a SPA is a web application designed and layed out using techniques that allow end-users access to all informatino and or functionality without ever leaving the _single page_ they are on. This includes not using the overused dreaded modal dialogue, if at all possible. 
 
This is an important usability technique in that it allows for uninterupted concentration and workflow for end-users. This also vastly simplifies navigation and page/keyboard contraols and nullifies the need for developing content routers, saving time, LoE, and complexity 
 
<br />

<h3 id="alternate-layouts">: : ALTERNATE LAYOUTS : :</h3>

D7460N has optional alternate layout configurations that optimize master/detail workflow conventions from left to right and right to left. 

<br />

---

<br />
 
<h2 id="pwa">: : Progressive Web Application (PWA) : :</h2>

<br />
 
https://www.inrythm.com/pwas/best-of-the-best-and-native/

<h3 id="cross-platform-interoperability">: : CROSS-PLATFORM-INTEROPERABILITY : :</h3>

Progressive Web Applications (PWAs) provide access to open web technologies, to provide cross-platform interoperability. PWAs provide end-users with an app-like experience that's customized for their devices. PWAs can provide fully tailored, installable experiences on a desktop operating system that inherit the benefits of that environment. Yet PWAs still work across platform from the same code and servers that power your in-browser and mobile devices. **A single codebase that's shared between your website, mobile app, and desktop app (across operating systems)**. 
 
<br />

<h3 id="immersive-experience">: : EMERSIVE EXPERIENCE : :</h3>

These new web developemnt capabilities provide great opportunities to build emersive experiences that deeply integrate with the desktop operating system.

<br />

<h3 id="progressively-enhanced">: : PROGRESSIVELY ENHANCED : :</h3>

PWAs are websites that are progressively enhanced to function like installed, native apps on supporting platforms, while functioning like regular website on other browsers. 

<br />

<h3 id="desktop-app">: : IT'S A DESKTOP APP : :</h3>
 
The qualities of a PWA combine the best of the web and compiled apps. PWAs run in browsers, like websites. But PWAs also have access to desktop features;

For example : :
* A PWA can still work when the device is offline
* PWAs can be installed on the operating system
* PWAs support push notifications and periodic updates (continuous integration)
* PWAs can access hardware features 
 
When installed, PWAs are just like other apps on Windows.

For example : :
* A PWA can be added to the start menu
* A PWA can be pinned to the task bar
* PWAs can handle file directories and files
* PWAs can run on start-up when end-users sign-in

<br />

<h3 id="website">: : IT'S A WEBSITE : :</h3>

PWAs have the same functionality and reach as websites:
* PWAs can be indexed by search engines
* A PWA can be linked to and from other websites and web applications
* A PWA can work on all devices, **from a single code base** **[ company goal ]**
* PWAs have a much lower cross-platform development cost than compiled apps that require a specific codebase for each platform, such as a separate codebase for Android, for iOS, for each desktop operating system

<br />

<h3 id="advantages">: : ADVANTAGES : :</h3>

A fully capable Progressive Web Application can provide the following advantages for end-users:
* **Discoverable** - The web application is discoverable from search results and supporting app stores
* **Installable** - Pin and launch the app from the home screen, Start menu, and the Taskbar
* **Re-engageable** - The app can recieve push notifications, even when the app isn't active
* **Network Independent** - The app will work offline or in "low-network conditions"
* **Progressive** - The user experience of the app scales up or down with device capabilities
* **Safe** - The app provides a secure `HTTPS` endpoint and other safeguards
* **Responsive** - The app adapts to the user's screen or orientation and input method
* **Linkable** - Share and launch the app from a standard link

<br />

 ---

<br />
 
<h2 id="security">: : SECURITY : :</h2>

<h3 id="web-application-firewall">: : WEB APPLICATION FIREWALL (WAF) : :</h3>
(WIP)
 
<br />
 
<h3 id="HTTP3">: : HTTP/3 : :</h3>
(WIP)
 
<br />
 
---

<br />
 
<h2 id="browser-compatibility">: : BROWSER COMPATIBILITY : :</h2>

<br />

* Chrome Version 110.0.5481.78 (Official Build) (64-bit)
* Edge Version 110.0.1587.46 (Official Build) (64-bit)
* Firefox Version 102.3.0esr (Official Build) (64-bit)
* _Not you Internet Exporer (IE)_

<br />

---

<br />
 
<h2 id="directory-structure">: : DIRECTORY STRUCTURE : :</h2>

<br />

(WIP)
