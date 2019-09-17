# Data Visualization for React Developers

* <https://frontendmasters.com/courses/d3-js-react/>
* <https://slides.com/shirleywu/deck-11#/>
* Workshop goal: use D3 to calculate data and React to render visualizations.
* D3's learning curve: enter-update-exit
* ===
* React's virtual DOM (let React do the hard work!)
* Different data types
  * Categorical (genres)
    * Ex: Movie genres, movie actors
    * Ordinal (t-shirt sizes)
    * Quantitative (temperatures)
    * Temporal (dates)
    * Spatial (cities)
* Basic charts and when to use them
  * Bar chart
    * For categorical comparisons
    * Domain: categorical
    * Range: quantitative
  * Histogram
    * For categorical distributions
    * Domain: quantitative bins
    * Range: frequency of quantitative bin.
  * Scatterplot
    * For correlation
    * 2 attributs and the relationship between their quantitative values.
  * Line chart
    * For temporal trends
    * Domain: temporal
    * Range: quantitative
  * Tree
    * For hierarchy
    * Parent-child relations
    * Multiple tier categories
  * Node link diagram
    * For connection
    * Relationship between entities.
  * Chloropleth
    * For spatial trends
    * Domain: spatial regions
    * Range: quantitative
    * Not good for: Suble differences in data.
    * <https://academy.datawrapper.de/article/134-what-to-consider-when-creating-choropleth-maps>
  * Pie chart
    * For hierarchical part-to-whole
    * Best for:
      * When values are around 25%, 30%, or 75%
      * 3 or 4 values.
    * Not good for
      * Comparing fine differences
      * Multiple totals
      * <https://blog.datawrapper.de/pie-charts/>
* SVG
  * rect
    * x: x-coordinate of top-left
    * y: y-coordinate of top-left
    * width
    * height
  * circle
    * cx: x-coordinate of center
    * cy: y-coordinate of center
    * r: radius
  * text
    * x: x-coordinate
    * y: y-coordinate
    * dx: x-coordinate offset
    * dy: y-coordinate offset
    * text-anchor: horizontal text
    * alignment
  * path
    * d: path to follow
    * Moveto, Lineto, Curveto, Arcto
    * <https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths>
