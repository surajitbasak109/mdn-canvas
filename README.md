Canvas Help
===========
Created Sunday 11 December 2016

#### &lt;canvas&gt;
The HTML &lt;canvas&gt; Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the &lt;canvas&gt; block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.

#### fillRect(x, y, width, height)
The CanvasRenderingContext2D.fillRect() method of the Canvas 2D API draws a filled rectangle at (x, y) position whose size is determined by width and height and whose style is determined by the fillStyle attribute.

#### strokeRect(x, y, width, height)
The CanvasRenderingContext2D.strokeRect() method of the Canvas 2D API paints a rectangle which has a starting point at (x, y) and has a w width and an h height onto the canvas, using the current stroke style.

#### clearRect(x, y, width, height)
The CanvasRenderingContext2D.clearRect() method of the Canvas 2D API sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.

#### beginPath()
The CanvasRenderingContext2D.beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.

#### closePath()
The CanvasRenderingContext2D.closePath() method of the Canvas 2D API causes the point of the pen to move back to the start of the current sub-path. It tries to add a straight line (but does not actually draw it) from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.

#### stroke()
The CanvasRenderingContext2D.stroke() method of the Canvas 2D API strokes the current or given path with the current stroke style using the non-zero winding rule.

#### fill()
The CanvasRenderingContext2D.fill() method of the Canvas 2D API fills the current or given path with the current fill style using the non-zero or even-odd winding rule.

#### moveTo(x, y)
The CanvasRenderingContext2D.moveTo() method of the Canvas 2D API moves the starting point of a new sub-path to the (x, y) coordinates.

#### lineTo(x, y)
The CanvasRenderingContext2D.lineTo() method of the Canvas 2D API connects the last point in the sub-path to the x, y coordinates with a straight line (but does not actually draw it).

#### arc(x, y, radius, startAngle, endAngle, anticlockwise)
The CanvasRenderingContext2D.arc() method of the Canvas 2D API adds an arc to the path which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction by anticlockwise (defaulting to clockwise).

#### quadraticCurveTo(cp1x, cp1y, x, y)
The CanvasRenderingContext2D.quadraticCurveTo() method of the Canvas 2D API adds a quadratic Bézier curve to the path. It requires two points. The first point is a control point and the second one is the end point. The starting point is the last point in the current path, which can be changed using moveTo() before creating the quadratic Bézier curve.

#### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
The CanvasRenderingContext2D.bezierCurveTo() method of the Canvas 2D API adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using moveTo() before creating the Bézier curve.

#### rect(x, y, width, height)
The CanvasRenderingContext2D.rect() method of the Canvas 2D API creates a path for a rectangle at position (x, y) with a size that is determined by width and height. Those four points are connected by straight lines and the sub-path is marked as closed, so that you can fill or stroke this rectangle.

#### Path2D()
The Path2D() constructor returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.

#### Path2D.addPath(path [, transform])
The Path2D.addPath() method of the Canvas 2D API adds to the path the path given by the argument.

#### fillStyle = color
The CanvasRenderingContext2D.fillStyle property of the Canvas 2D API specifies the color or style to use inside shapes. The default is #000 (black).

#### strokeStyle = color
The CanvasRenderingContext2D.strokeStyle property of the Canvas 2D API specifies the color or style to use for the lines around shapes. The default is #000 (black).

#### globalAlpha = transparencyValue
The CanvasRenderingContext2D.globalAlpha property of the Canvas 2D API specifies the alpha value that is applied to shapes and images before they are drawn onto the canvas. The value is in the range from 0.0 (fully transparent) to 1.0 (fully opaque).