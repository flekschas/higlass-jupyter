jupyter-higlass
===============================

HiGlass in your Jupyter Notebook

Installation
------------

<del>To install use pip </del> (Not Yet!)

    $ pip install jupyter_higlass
    $ jupyter nbextension enable --py --sys-prefix jupyter_higlass


Development
-----------
First make sure you have Jupyter Notebook and nbextensions installed. Use `--sys-prefix` to install into python's sys.prefix, useful for instance in virtual environments, such as with conda.

	$ pip install jupyter[complete]
	$ jupyter nbextension enable --py --sys-prefix widgetsnbextension
	$ pip install jupyter_contrib_nbextensions
	$ jupyter contrib nbextension install --sys-prefix

Then install the repo in developer/editable mode.

    $ git clone https://github.com/nvictus/jupyter-higlass.git
    $ cd jupyter-higlass
    $ pip install -e .

To build the package (requires npm) and install the extension use `make build` or:

	$ python setup.py build
    $ jupyter nbextension install --py --symlink --sys-prefix jupyter_higlass
    $ jupyter nbextension enable --py --sys-prefix jupyter_higlass

To uninstall, use `make clean` or:

	$ jupyter nbextension uninstall --py --sys-prefix jupyter_higlass
	$ rm -rf jupyter_higlass/static


Resources
---------

* http://kazuar.github.io/jupyter-widget-tutorial/
* https://ipywidgets.readthedocs.io/
