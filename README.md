FDF : : <br />

BANKING & INVESTMENTS : :
| STATUS   |       TYPE      |   ACCOUNT HOLDER(S)  |  FINANCIAL INSTITUTION  | AMOUNT INVESTED | YEAR END BALANCE | COMMENTS |
|----------|:---------------:|:--------------------:|:-----------------------:|:---------------:|:----------------:|:--------:|
|          |       Bank      |       Spouse         |       Bank name         |                                    |          |
|          |    Investment   |        Filer         |                         |                                    |          |
|          |    Investment   |    Filer, spouse     |                         |                                    |          |

INCOME : :
| STATUS   |   EARNED BY   |   US/FOREIGN    |  GROSS ANNUAL SALARY  |    NON TAXBALE INCOME   |    INTEREST INCOME    | DIVIDENDS | GROSS RENTAL | OTHER INCOME | COMMENTS |
|----------|:-------------:|:---------------:|:---------------------:|:-----------------------:|:---------------------:|:---------:|:------------:|:------------:|:--------:|
|          |     Spouse    |        US       |                       |                         |                       |           |              |              |          |
|          |     Filer     |        US       |                       |                         |                       |           |              |              |          |

VEHICLES : :
| STATUS   |      TYPE     |  OWNED/LEASED   |         VEHICLE       |     PURCHASED/LEASED    | MONTHLY LEASE PAYMENT | COMMENTS |
|----------|:-------------:|:---------------:|:---------------------:|:-----------------------:|:---------------------:|:--------:|
| check    |     Vehicle   |      Owned      | Year, Make, model, ID |   Year, original amount |         blank         | Paid off |
| check    |     Vehicle   |      Owned      |                       |                         |                       |          |
| check    |     Vehicle   |      Owned      |                       |                         |                       |          |

DEBT/LIABILITIES : :
| STATUS   |      TYPE     |  DEBT/LIABILITY | ACCOUNT HOLDER(S) | CREDITOR | ORIGINAL BALANCE | MINIMUM MONTTHLY PAYMENT | YEAR END BALANCE | COMMENTS |
|----------|:-------------:|:---------------:|:-----------------:|:--------:|:----------------:|:------------------------:|:----------------:|:--------:|
| col 1 is |  left-aligned | $1600           |                   |          |                  |                          |                  |          |
| col 2 is |    centered   |   $12           |                   |          |                  |                          |                  |          |
| col 3 is | right-aligned |    $1           |                   |          |                  |                          |                  |          |


# ui

Hover Glide Image Gallery<br />
https://codepen.io/Hyperplexed/pen/VwXXPKJ

Responsive CSS Tabs<br />
https://codepen.io/hluebbering/pen/PoaWLrw

Sticky page header shadow on scroll<br />
https://codepen.io/hexagoncircle/pen/qBMeWqo

Codepen Challenge: Button - Play (corners)<br />
https://codepen.io/Sicontis/pen/NWLVOpr

Dual Picture Accordion Fold (css only) (grid floor)<br />
https://codepen.io/amit_sheen/pen/PodVLMr

Blurred animated gradients<br />
https://codepen.io/Jeromche/pen/KKQrGgP

Click the button!<br />
https://codepen.io/bnhovde/pen/OJLYGKx

CSS Typing Effect<br />
https://codepen.io/denic/pen/GRoOxbM

Card hover effect<br />
https://codepen.io/aaroniker/pen/yLEPJXj

Simple CSS Waves | Mobile & Full width<br />
https://codepen.io/goodkatz/pen/LYPGxQz

Responsive Social Platform UI<br />
https://codepen.io/TurkAysenur/pen/RwWKYMO

CSS Nesting Feature Detection, Method 1a (Nesting affecting classes)<br />
https://codepen.io/bramus/pen/oNdrypM

Spotlight Cursor Text Screen<br />
https://codepen.io/carolineartz/pen/rNaGQYo

Dashboard UI<br />
https://codepen.io/havardob/pen/jOwJWOG

Dropdown Menu<br />
https://codepen.io/flavio_amaral/pen/xxqQLoa

Snow (Pure CSS)<br />
https://codepen.io/alphardex/pen/dyPorwJ

Shaders Example #13<br />
https://codepen.io/sfi0zy/pen/XWbYqOr

Toilet Paper Toggle<br />
https://codepen.io/chrisgannon/pen/mdGvGjJ

CSS Glassmorphism Button Hover Effects | Glass Morphism<br />
https://codepen.io/katarzynamarta/pen/rNdbbVq

3D banners with ScrollTrigger<br />
https://codepen.io/supamike/pen/KKVqXmR

Hover Glide Image Gallery<br />
https://codepen.io/Hyperplexed/pen/VwXXPKJ

Colorful Theme Switch (with :has())<br />
https://twitter.com/jonkantner/status/1643759547981471746<br />
https://codepen.io/jkantner/pen/eYPYppR

Yesterday we released Angular v16.0.0-next.7!
https://twitter.com/mgechev/status/1644018247748943872
https://github.com/angular/angular/releases/tag/16.0.0-next.7<br />
16.0.0-next.7 (2023-04-05)

Breaking Changes:

core<br />
* QueryList.filter now supports type guard functions, which will result in type narrowing. Previously if you used type guard functions, it resulted in no changes to the return type. Now the type would be narrowed, which might require updates to the application code that relied on the old behavior.
* The `ReflectiveInjector` and related symbols were removed. Please update the code to avoid references to the `ReflectiveInjector` symbol. Use `Injector.create` as a replacement to create an injector instead.

platform-browser<br />
* The deprecated `BrowserTransferStateModule` was removed, since it's no longer needed. The `TransferState` class can be injected without providing the module. The `BrowserTransferStateModule` was empty starting from v14 and you can just remove the reference to that module from your applications.
