“Most of what architects have traditionally done should be done by developers, by tools, or not at all” proclaimed Martin Fowler and Erik Doernenburg at a recent meetup. This may come as a surprise to many architects who are proud to carry their hard-earned title. As Chief Architect of a large financial services company, I do actually agree with their statement - the keyword being “traditionally”.

Traditionally, architects were considered to be those folks who make major design decisions on a project, draw architecture diagrams, and direct developers. Those tasks are in fact better handled by the development team and modern tooling than by a single person. Many modern companies therefore eschew software architect as a separate job title, even though they highly value software architecture. The good news is that many new tasks await architects in large organizations. And they are far more interesting and impactful than drawing class diagrams. However, they require architects to engage at the upper floors of their organization.

The Architect Elevator

To illustrate that there’s much more for architects to do than guiding software developers, I use the metaphor of the “architect elevator”. This elevator spans from a company’s engine room all the way to the penthouse where upper management defines the strategy. Whereas digital companies utilize technology to unlock new business opportunities, traditional organizations often still view their IT as a mere cost factor, far removed from the business strategy: countless layers of management separate the upper floors from the lower ones. Information is passed by taking the stairs from floor to floor, causing the well-known telephone game effect: when a message passes through many stations, it not only takes time, but its meaning can also be completely changed.

For architects and developers this spells out two major problems: first, it may be difficult to obtain support or funding for innovative projects because folks on the upper floor don't see the need for investment. But even if new technologies are rolled out, existing processes and politics may prevent them from realizing the expected benefit. In both cases, architects must visit the upper floors to unblock or to trigger organizational changes.

As organizations are unlikely to collapse their management layers anytime soon – too many weekend homes and kids’ educations are at stake – architects need to move quickly between the floors to align business strategy with IT architecture and technical implementation. An elevator ride from the engine room up to the penthouse highlights what awaits a modern architect at each floor!

Cloud-ready applications demand run-time architecture

Architects are still needed in the engine room, given the architectural demands routinely placed on modern applications: we used to think of distributed systems as something unusual and rather complicated that's best avoided if you can. Today it’s rare to build an application that’s not distributed: virtually all meaningful applications expose service APIs, call other services, and run globally distributed in the cloud. On top of this, they are expected to update with zero downtime, scale horizontally, and be resilient against hardware and software failure plus a Chaos Monkey killing its processes for fun. Achieving all this requires a good bit of architecture!

In recent years I have observed a significant up-tick in conferences related to software architecture -- a good sign that good architecture is as relevant as ever and that there's a lot to be learned.

A few years ago it appeared that most major architecture decisions were already taken inside application frameworks such as Java EE or Spring, letting developers focus on coding functionality and the user interface. While this promise came partially true for design-time decisions, e.g. whether to use MVC, modern applications typically bring significant architectural demands related to its run-time. This trend is also reflected in the open source community: be it Docker, Kubernetes, Mesos, CloudFoundry, Prometheus, Hystrix, Vizceral, or Kibana, project names not only become more difficult to spell, but also increasingly focus on application run-time management and monitoring.

Modern architects must therefore be well-versed in run-time architecture considerations, including deployment and configuration automation, scalability, monitoring, etc. They may trade class diagrams for deployment diagrams!

Automate software manufacturing to reduce time-to-value

It’s been long believed that industrializing software development will reduce project cost and risk. Much of this effort initially focused on the design aspect of software – how to write rock-solid requirements and manage project teams like an assembly line. Much of this yielded moderate success at best. Jack Reeves already concluded a quarter century ago that coding is in fact design work, not production work. Trying to industrialize design, which by nature is a creative undertaking, is thus a questionable endeavor. What should be industrialized instead is the production of software: the assembly and distribution of software artifacts to form a running system.

A lot of large companies have discovered the benefits of cloud computing but see it mainly as an infrastructure topic. I feel that's misguided: being able to get compute resources more quickly and cheaply is useful, but the real business benefit lies in a fully automated tool chain that minimizes the time in which a normal code change can go into production. Not quite coincidentally, this is my favorite definition of DevOps.

The manufacturing industry started dramatically automating production over half a century ago, leaving most factories virtually devoid of humans. Ironically, many software projects, whose ultimate purpose may well be to automate tedious manual tasks, still deliver software “artisan-style”: a file copied by hand, a little patch here, another config change over there, and a few updated permissions just for good taste. Oh, and one more copy of the file that was forgotten. Just like the shoemaker's children go barefoot, the software delivery process ironically lacks the kind of automation that software brings to the business.

Luckily, continuous integration (CI) and continuous delivery (CD) have provided major improvement by industrializing software delivery through relentless automation, supported by cloud computing and software-defined infrastructures. They make it possible to treat servers as disposable items: if a server has any kind of issue, you don't repair it, you instantiate a new one (see the cattle vs. pets analogy). The main driver for automating software delivery is not economics, i.e. saving on staff performing deployment tasks. Rather, it's the need for speed and repeatability - humans aren't fast and reliable enough.

Thus, modern architects should not just look at the design, but also the "manufacturing" of software. Improving this aspect of the engine room has a critical impact on the penthouse: rapid and repeatable delivery shortens the time it takes for software to deliver business value. A great reason to visit the upper floors.

Minimize up-front decision making

Many architects see themselves as, and are expected to be, the ones making the “difficult to reverse” decisions. This prototype of an architect may remind one of the white-haired gentleman in the movie “The Matrix”: one very experienced, all-knowing person who makes all decisions. There’s a major catch with this aspiration: the Matrix Architect is a computer program and not a human being.

A canonical example of deferring a decision is server sizing. Long lead times for server ordering force many IT departments to spend significant time and energy predicting the computing needs for yet-to-be-developed applications. Naturally, it's guesswork at best as the exact resource demands or the actual load on the application aren't know yet. To make matters worse, many teams prefer to be on "the safe side", i.e. have some extra capacity in case the estimates were too low or to avoid blame. Doing so leads to vastly oversized and underutilized infrastructure. Architecting an application to be horizontally scalable and automating server provisioning allow the sizing decision to be deferred until production or load-testing time, when the application's actual resource needs can be observed.

Making critical decisions at the beginning of a project is actually the worst time as it’s the time where the least is known. As the project progresses, more information becomes available, allowing more informed and thus better decisions. So instead of entrusting all crucial decisions to one person, the project risk can be reduced by minimizing the number of decisions that are irreversible. This can be achieved for example by choosing a flexible design or by using modularity that localizes the scope of a later change.

Frequently, the desire to make decisions upfront is driven by existing structures and processes as opposed to technical needs. For example, teams are forced to make product decisions before development even starts to satisfy a time-consuming budget approvals process. Thus, irreversible decisions can also be avoided or reduced by fending off bureaucrats who, often with good intentions, demand up-front decisions.

Vendors also have a tendency to push for early tooling decisions, promising management spectacular results, including reducing or removing the need for expensive programmers, if only their tool is chosen. You can’t blame them for doing so – it’s their job. But you need to counter-balance - a faster car does not make a better driver. Worse yet, in some cases the car may not even be faster, just more expensive, or it may end up in the ditch as it's too difficult to maneuver.

These examples highlight that to improve effectiveness in the IT engine room, you may have to change how the organization functions. That’s why architects must ride the elevator to the upper floors.

Sell architecture options

Explaining to executives what architecture is, can be a challenge. In a recent senior executive meeting, one architect stumbled around this topic for a few minutes, causing glazed-over eyes and head scratches. I decided to chime in: “architecture is selling options.” This statement caught the executives' immediate attention: financial options give the owner of the options to purchase or sell a financial instrument in the future at known conditions: an option gives the right, but not the obligation, to buy a stock on a certain future date for a set price of let’s say $100. When that day comes, it’s easy to decide whether to exercise the option: if the stock price is higher than $100, I’ll use my option to buy for $100 and earn money. If not, I let the option lapse.

One of the executives in a meeting took the option analogy a step further: the value, and therefore the price, of an option increases in volatile markets – this is encoded in the Nobel-prize winning Black-Scholes model. Applying this insight to architecture,the executive concluded that in a volatile technology and business environment, as we face it today, the value of architecture options goes up. Therefore, companies should invest more in architecture that allows them to defer decisions. Now this is the type of conversation an architect wants to have in the upper floors of his or her organization!

An option is a way to defer a decision to a later point in time while locking in key parameters, such as the price. The financial industry knows quite well that this option has a value, and therefore a price. Presenting architecture as selling options immediately makes sense to senior executives well-versed in financial terms: you invest in architecture so you can change your mind later, at a known cost. For example, if your application is scalable and automatically deployable you don’t need to commit hardware purchases up-front but can add hardware in the future when the need arises. Being able to do so generates concrete savings and justifies the investment into architecture.

Just like financial options, architecture options also allow us to hedge our bets: we expect a certain outcome but want to limit the downside if that outcome doesn't materialize, reducing the impact of risk scenarios.

Make architecture fit for purpose

Often, we look to the architect to give us a "good" architecture. The catch is that architecture is rarely good or bad - it's either fit or unfit for purpose. The purpose is usually dependent on the context in which the system will live rather than specific user requirements. An architect's job therefore is to consider architecture options in a broader context, which can involve diverse factors such as commercial and legal agreements, skills availability, or an installed base.

As chief architect, I am frequently asked whether an architecture is good. My standard answer to that is "it depends". It depends on what problem the team is trying to solve, which assumptions they can make, and which options they need to leave open. Often it turns out that answering these questions helps them make better architecture decisions.

Finding the appropriate context requires the architect to visit many floors of the organization. Especially decisions that require broad coordination are often made by management teams, far removed from the software delivery teams, based on financials, process compliance, or PowerPoint slides. An architect's job includes creating transparency on ramifications and to involve all levels in the architectural trade-off. Luke Hohmann's Beyond Software Architecture nicely illustrates the breadth of architecture considerations.

Even with all consideration, making architecture decisions is hard and runs a certain risk of getting it wrong. It’s therefore best to have decisions made by those people who have to live with the consequences. This thought brings us to the next floor…

Validate decisions through feedback loops

A well-known architecture department anti-pattern is the “ivory tower”: architects sit in the penthouse to define how developers should design and build software, without developing any software themselves. Such a setup has one cardinal flaw: it doesn't provide feedback to the architects as to the effectiveness nor the cost of their decisions. Worse yet: some architects quite enjoy themselves not having to deal with those consequences.

Once a developer approached our architecture team with an application that had “significant scalability demands”. A quick look at the architecture diagram revealed numerous components communicating via XML messages. When I pointed out that this may be the very reason for the performance concerns, I was quickly informed that this was an architecture decision and couldn’t be changed. Assuming the architects are smart and well-intentioned, they may have thought about interoperability when they made this decision but may be unaware of the negative impact on run-time performance and development velocity.

Most complex systems can only function by means of feedback loops: whether it's your arm stretching out until your fingers sense the keyboard, your heater thermostat turning off the furnace once the room temperature is reached, or a driver continuously adjusting the steering wheel to keep the car in its lane. In IT, feedback loops apply to both project steering and architecture: predicting project cost and timeline becomes much easier once the team velocity is known, and allows for making necessary adjustments along the way. Architects should find out whether "reusable" APIs really fostered reuse, whether common frameworks sped up development, or whether the monitoring framework reduced unscheduled downtime. Understanding feedback requires identifying clear metrics and goals, which can be a useful exercise in its own right.

A great way for architects to obtain feedback is to be directly involved in, and accountable for, project delivery. Feedback cycles are most effective when they are short and immediate, making it appealing to empower development teams to make architecture decisions, within agreed-upon bounds of general principles or a published IT strategy.

Architect the organization alongside technology evolution

Much of recent software innovations, such as DevOps, cloud, or big data can only deliver their full value if the organizational structure evolves alongside the technology. It doesn’t help you if your fully automated tool chain can deploy software in seconds if you have to pass a 3-month-long paper-based approval process to be allowed to do so. When speeding up software delivery it’s therefore inevitable to look not just at the technical side of things. Modern architects must also consider the setup of the organization - something to be done in the upper floors.

When I deployed a new private cloud platform, I was told that to be compliant with existing processes, updates to the platform would require agreement from all application owners using the platform. With hundreds of users, it would have been impossible to make any updates at all.

For example, many IT organizations split “change” (developing software) from “run” (operating software). This no longer makes much sense in the digital world as feedback from running software is the key mechanism through which companies refine their products in so-called build-measure-learn cycles.

Interestingly, the behavior of an organizational system is often subject to similar forces as those that affect a technical system. For example, one of the biggest throughput killers in distributed systems are synchronization points – one reason we favor asynchronous messaging. The organizational equivalent of a synchronization point is the meeting – it is also well-known to reduce throughput!

Layering is another well-known concept that can help manage complexity and gain flexibility, but can also increase latency due to many translations between the layers. This logic holds true for technical just as for organizational system structures: layering organizations enables outsourcing of layers as dependencies are clearly defined. However, each layer brings translation effort both at “design-time” – contracts and service-level agreements have to be negotiated - as well as during “run-time” – lengthy requirements documents are written and many “alignment meetings” held.

Many architects are afraid to touch organizational aspects because they are full of “people stuff” and politics. But the similarities in the behavior of complex systems equip architects well to engage at the upper floors and remove bottlenecks in organizational systems.

Remove blockers at the right “floor”

Many developers, architects, and project managers can feel frustration that they receive insufficient support from the organization: it’s hard to get staffing or funding for innovation, important projects, or critical tasks like refactoring. Often such resistance is due to the organization sharing a different belief system than the development team. For example, many traditional companies value predictability over speed. They therefore implement long series of “checkpoints” and “quality gates”, which lead to arduous and time-consuming processes. It’s difficult to implement an agile or DevOps way-of-working in such an organization.

Many organizations equate "fast" with "low quality" - who hasn't heard the slogan "quick and dirty"? You first have to explain that "quick" can mean "clean" before you can win management's heart for frequent deployments.

Changing such an organization’s behavior requires changing its beliefs. Otherwise you will keep banging your head against the cultural wall. For example, organizations enamored with predictability are often focused on optimization of existing processes through economies of scale and consistency. To compete in a digital world, they need to understand economies of speed, i.e. generating value by harvesting new market opportunities. Such a change in attitude has to happen at the upper levels near the penthouse - you need to ride the elevator up to the right level in order to make progress.

The reporting lines can be a useful indicator of an IT organization’s belief system. For example, if the CIO reports to the CFO, the chief financial officer, IT is likely seen as a mere cost factor, not as an innovator and enabler of market opportunity. Any attempt to sell technology innovation in such an organization quickly translates in management’s head into “I heard the same thing with client-server, the web, and such. All it did was cost me money." Changing the penthouse’s view on these items is a necessary precondition to starting a successful IT innovation.

ArchOps: Build a vertical architecture team

Having just taken a quick ride in the elevator from the engine room up to the penthouse highlights the need for architects to move between the floors. This insight should also reflect in the setup of an architecture team. Commonly, a central architecture team consists of “high-level” architects positioned close to the penthouse but disconnected from technology innovation and project delivery.

Architects in my team share on-call duty with project teams for platforms they built. We call this ArchOps as the next evolutionary step of DevOps and made cool ArchOps caps for everyone.

As it's highly unlikely that a single architect can cover all floors, it makes sense to build a “vertical” architecture team, one that comprises architects from many different levels: enterprise architects, strategic architects, solution architects, and technology specialists. It's like attaching an elevator to an existing skyscraper that only has stairs: suddenly things start to move faster.

Managing such a team isn’t easy but it assures that a single team can cover all floors of the organization and that architects have necessary feedback loops. It also provides the architect team with the ability to execute if the organization lacks the skill or setup to do so.

Keep riding the elevator


    I compiled my experiences in transforming large IT organizations into a book with the cheeky title 37 Things One Architect Knows About IT Transformation. The book discusses the skills needed to engage on the upper floors by means of 37 entertaining but thought-provoking anecdotes. The book is available as DRM-free e-book on Leanpub or as a printed book from Amazon.

With so much going on in the upper floors, some architects may wonder whether they should become organizational designers rather than technical architects. That would be putting the baby out with the bathwater, though. Designing and influencing the organization depends on a thorough understanding of software delivery and technology innovation. It’s the combination of technical acumen and organizational skill that makes modern architects valuable and IT transformation successful.

You might have seen architects ride the elevator up just to enjoy the good view in the penthouse so much that they never come back down. In a world of rapid technology evolution such an attitude is guaranteed to render one’s technical skill irrelevant rather quickly. The point therefore is to keep riding the elevator up and back down – it’s the only way to keep penthouse and engine room connected.

In the inverse case, many architects feel that the upper floors are not accessible to them. Would a CEO or vice president really want to talk to them? Amazingly, more often than not, they do. Many penthouse denizens feel disconnected from the reality in their organization and confused by the rapid technical advancements. They are therefore grateful if someone reaches out to them, speaks their language, but also has their feet firmly planted in the engine room.

So, keep riding the architect elevator, visit the upper floors more often, and don't forget to come back down!