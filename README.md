jupyter-higlass
===============================

HiGlass in your Jupyter Notebook

Installation
------------

To install use pip:

    $ pip install jupyter_higlass
    $ jupyter nbextension enable --py --sys-prefix jupyter_higlass


For a development installation (requires npm),

    $ git clone https://github.com/nvictus/jupyter-higlass.git
    $ cd jupyter-higlass
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix jupyter_higlass
    $ jupyter nbextension enable --py --sys-prefix jupyter_higlass
