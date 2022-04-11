# Rapid Application Development with Code Generation

* <https://frontendmasters.com/courses/rapid-app-dev/>
* course code: <https://github.com/onehungrymind/rad-patterns-workshop>
* Is it possible that you could build applications 10x faster than you are right now?
* <https://stackblitz.com/edit/rad-rapid-primer-start-hfhqwz>
* String manipulation
    * What is code?
        * A string of characters.
        * A bunch of strings.
    * Array.split and Array.join
    * Array.map
    * Array.reduce
        * rope = strands.reduce((_rope,strand) => _rope.intertwine(strand));
* After 20 years of programming, I realized that I was essentially doing the same four things over and over.
    * Describing Things - Data Structures - Nouns
    * Performing Actions - Functions - Verbs
    * Making Decisions - Conditionals
    * Repeating via Iteration - Iterators
    * I realized that I had been doing thse things with ease since I was a very small child.
    * Something has been reduced to pure muscle memory.
* Our goal is not to learn more but rather to gain a deeper understanding of what we already know.
* What limiting beliefs exist around rapid prototyping?
    * Pen and Paper
    * Wireframes
    * Static Mocks
    * Interactive Mocks
    * High Fidelity Prototypes (Perceived High Level of Effort)
    * "Just to be clear, this prototype must never, ever be put into production. We will throw this away and replace it with real code." -Every Engineer Ever.
    * Historically, prototypes are designated as disposable or "throw away" because they are not written to production standards.
    * Prototypes should be disposable because they are immutable and not because they are inferior.
    * Immutable infrastructure is an approach to managing services and software deployments on IT resources wherein components are replaced rather than changed. An application or services is effectively redeployed each time any change occurs.
* Experience and Expertise
    * Book called "The business of expertise"
* Skill and Effort are inversely proportionate.
* Patterns are Important.
* Architecture
    * The biggest problem in the development and maintenance of large-scale software systems is complexity - large systems are hard to understand.
    * Vertical Development
    * Horizontal Development
    * When we achieve clear functional cohesion from cleanly abstracted layers, natural patterns of convention will emerge.
    * Fine-grained functionality reduces code variance between domain models. Performing an action on one model is almost identical to the same action on any other model.
* Horizontal Tour
    * Layers
        * Actions
        * Selectors
        * Entities
        * Reducers
        * Facades
        * Effects
        * Wiring
* Domain Models
    * <https://stackblitz.com/edit/rad-domain-models-start-pka35i>
    * <https://react-jsonschema-form.readthedocs.io/en/latest/>
    * <https://formly.dev/>
* Utility Functions
    * <https://stackblitz.com/edit/rad-name-generator-start>
* Model Name Variations
    * <https://stackblitz.com/edit/rad-name-generator-start-8iuh8m>
* CLI
    * <https://stackblitz.com/edit/rad-cli-generator-ks8pn1>
* Generators
    * <https://stackblitz.com/edit/rad-template-generator-start-cdawyp?file=index.ts>
* Generating Layers
    * <https://stackblitz.com/edit/rad-layer-generator-start-vvxbce>
* Generating Stacks
    * <https://stackblitz.com/edit/rad-stack-generator-start>