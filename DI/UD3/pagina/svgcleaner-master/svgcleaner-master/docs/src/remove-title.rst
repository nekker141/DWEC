Remove ``title`` element
------------------------

We can remove all `title <https://www.w3.org/TR/SVG/struct.html#DescriptionAndTitleElements>`_
elements since they are not rendered either way.

But since this element can be used by render software - this action is optional.

.. GEN_TABLE
.. BEFORE
.. <svg>
..   <title>svgcleaner</title>
..   <circle fill="green" cx="50" cy="50" r="45"/>
.. </svg>
.. AFTER
.. <svg>
..   <circle fill="green" cx="50" cy="50" r="45"/>
.. </svg>
.. END
