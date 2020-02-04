<style type="text/css">.rendered-markdown{font-size:14px} .rendered-markdown>*:first-child{margin-top:0!important} .rendered-markdown>*:last-child{margin-bottom:0!important} .rendered-markdown a{text-decoration:underline;color:#b75246} .rendered-markdown a:hover{color:#f36050} .rendered-markdown h1, .rendered-markdown h2, .rendered-markdown h3, .rendered-markdown h4, .rendered-markdown h5, .rendered-markdown h6{margin:24px 0 10px;padding:0;font-weight:bold;-webkit-font-smoothing:antialiased;cursor:text;position:relative} .rendered-markdown h1 tt, .rendered-markdown h1 code, .rendered-markdown h2 tt, .rendered-markdown h2 code, .rendered-markdown h3 tt, .rendered-markdown h3 code, .rendered-markdown h4 tt, .rendered-markdown h4 code, .rendered-markdown h5 tt, .rendered-markdown h5 code, .rendered-markdown h6 tt, .rendered-markdown h6 code{font-size:inherit} .rendered-markdown h1{font-size:28px;color:#fff} .rendered-markdown h2{font-size:22px;border-bottom:1px solid #ccc;color:#000} .rendered-markdown h3{font-size:18px} .rendered-markdown h4{font-size:16px} .rendered-markdown h5{font-size:14px} .rendered-markdown h6{color:#777;font-size:14px} .rendered-markdown p, .rendered-markdown blockquote, .rendered-markdown ul, .rendered-markdown ol, .rendered-markdown dl, .rendered-markdown table, .rendered-markdown pre{margin:15px 0} .rendered-markdown hr{border:0 none;color:#ccc;height:4px;padding:0} .rendered-markdown>h2:first-child, .rendered-markdown>h1:first-child, .rendered-markdown>h1:first-child+h2, .rendered-markdown>h3:first-child, .rendered-markdown>h4:first-child, .rendered-markdown>h5:first-child, .rendered-markdown>h6:first-child{margin-top:0;padding-top:0} .rendered-markdown a:first-child h1, .rendered-markdown a:first-child h2, .rendered-markdown a:first-child h3, .rendered-markdown a:first-child h4, .rendered-markdown a:first-child h5, .rendered-markdown a:first-child h6{margin-top:0;padding-top:0} .rendered-markdown h1+p, .rendered-markdown h2+p, .rendered-markdown h3+p, .rendered-markdown h4+p, .rendered-markdown h5+p, .rendered-markdown h6+p{margin-top:0} .rendered-markdown ul, .rendered-markdown ol{padding-left:30px} .rendered-markdown ul li>:first-child, .rendered-markdown ul li ul:first-of-type, .rendered-markdown ol li>:first-child, .rendered-markdown ol li ul:first-of-type{margin-top:0} .rendered-markdown ul ul, .rendered-markdown ul ol, .rendered-markdown ol ol, .rendered-markdown ol ul{margin-bottom:0} .rendered-markdown dl{padding:0} .rendered-markdown dl dt{font-size:14px;font-weight:bold;font-style:italic;padding:0;margin:15px 0 5px} .rendered-markdown dl dt:first-child{padding:0} .rendered-markdown dl dt>:first-child{margin-top:0} .rendered-markdown dl dt>:last-child{margin-bottom:0} .rendered-markdown dl dd{margin:0 0 15px;padding:0 15px} .rendered-markdown dl dd>:first-child{margin-top:0} .rendered-markdown dl dd>:last-child{margin-bottom:0} .rendered-markdown blockquote{border-left:4px solid #DDD;padding:0 15px;color:#777} .rendered-markdown blockquote>:first-child{margin-top:0} .rendered-markdown blockquote>:last-child{margin-bottom:0} .rendered-markdown table th{font-weight:bold} .rendered-markdown table th, .rendered-markdown table td{border:1px solid #ccc;padding:6px 13px} .rendered-markdown table tr{border-top:1px solid #ccc;background-color:#fff} .rendered-markdown table tr:nth-child(2n){background-color:#f8f8f8} .rendered-markdown img{max-width:100%;-moz-box-sizing:border-box;box-sizing:border-box} .rendered-markdown code, .rendered-markdown tt{margin:0 2px;padding:0 5px;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px} .rendered-markdown code{white-space:nowrap} .rendered-markdown pre>code{margin:0;padding:0;white-space:pre;border:0;background:transparent} .rendered-markdown .highlight pre, .rendered-markdown pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px} .rendered-markdown pre code, .rendered-markdown pre tt{margin:0;padding:0;background-color:transparent;border:0}</style>
<div class="rendered-markdown"><hr />
<p>Napiszecie teraz aplikację Todo wraz z TimeTrackerem, czyli aplikację, do której będzie można dodawać zadania do wykonania oraz dodawać do nich operacje wykonane wraz z czasem jaki spędziliśmy nad danym zadaniem.</p>
<p><a href="lab.dom.formularze.time-tracker /index.html" target="_blank">Otwórzcie stronę w nowej karcie</a> i przeanalizujcie przygotowany kod html.</p>
<p>Ten kod to tylko przygotowane snippety do tego jak poszczególne elementy aplikacji powinny wyglądać.
<br  />To Wasza aplikacja poprzez JS-a ma te elementy generować.</p>
<p>Jak zapewne zauważyliście aplikacja składa się z:</p>
<ul>
<li>formularza do dodawania nowego zadania</li>
<li>listy zadań - każde zadanie to osobna sekcja z klasą task</li>
<li>do zadania można dodać operację poprzez przycisk $Add operation$</li>
<li>pod pierwszym zadaniem macie pokazane różne etapy &ldquo;życia&rdquo; operacji<ul>
<li>pierwszy element to formularz do dodawania nowej operacji (ma się pojawiać po kliknięciu $Add operation$)</li>
<li>drugi element - to wygląd operacji po dodaniu - ma ona dwie opcje dodawania czasu spędzonego nad tą operacją<ul>
<li>$Add time manually$ - wpisanie ręcznie czasu w minutach (widok czwartego elementu na liście)</li>
<li>$Start timer$ - uruchamia timer, który na bierząco pokazuje ile czasu upłynęło (aktualizowany co sekundę) - widok to trzeci element na liście</li>
</ul>
</li>
<li>ostatni element to wygląd już po zarejestrowaniu czasu dla operacji</li>
</ul>
</li>
<li>zadanie ma też opcję finish - powoduje to, że znikają wszystkie przyciski z tego zadania i jego operacji</li>
</ul>
<p>Przygotujcie odpowiednie metody do tworzenia pojedynczych elementów DOM w pliku DomElements.js - metody te mają być w prototypie typu DomElements.</p>
<p>W pliku app.js będziemy przechowywać wszystkie zadania w zmiennej tasks, ktora będzie tablicą, która będzie przechowywać obiekty typu Task.
<br  />W oparciu o tą tablicę ma być budowany cały wygląd listy operacji - docelowo jedyny stały element w pliku index.html to formularz do dodawania zadań, reszta ma być budowana dynamicznie.</p>
<p>Omówmy teraz potrzebne typy Task i Operation, które macie utworzyć w odpowiednich plikach.</p>
<h1>Task</h1>
<p><strong>atrybuty</strong>:</p>
<ul>
<li>title</li>
<li>description</li>
<li>status - domyślnie open, po zakończeniu ma być closed</li>
<li>operations - tablica przechowująca powiązane operacje</li>
</ul>
<h1>Operation</h1>
<p><strong>atrybuty</strong></p>
<ul>
<li>description</li>
<li>timeSpent - startowo 0 - czyli nie zarejestrowano jeszcze czasu i wtedy mogą być widoczne przyciski - czas przechowujemy w sekundach, natomiast dopiero na wyświetlaniu (czyli w którejś z metod DomELements) formatujemy to na zapis 1h 23m 15s</li>
</ul>
<p><strong>Hint</strong></p>
<p>W elementach dot. zadań wykorzystajcie dataset, aby przechowywać m.in. informację którego zadania dotyczy dana sekcja - wykorzystajcie do tego indeks tablicy tasks z pliku app.js</p>
</div># todo-timeTracker-js-app
