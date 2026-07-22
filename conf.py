# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'portfolio'
copyright = '2026, growzhangyu'
author = 'growzhangyu'
release = '0.2'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration


templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

extensions = [
    "sphinx_design",
    "sphinx_last_updated_by_git",
    "sphinxcontrib.lightbox2",
]
html_theme = "furo"

html_theme_options = {
    "sidebar_hide_name": False,
    "footer_icons": [],
}

html_static_path = ["_static"]

html_css_files = [
    "custom.css",
]

html_js_files = [
    "custom.js",
]

html_last_updated_fmt = "%Y-%m-%d %H:%M:%S"
html_show_sourcelink = True
html_favicon = "_static/favicon.ico"
