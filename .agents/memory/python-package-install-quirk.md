---
name: Python package installation quirk
description: Installing a one-off Python package can fail against the workspace's pre-existing invalid .pythonlibs environment.
---

Avoid assuming a one-off Python package install will work in this workspace; use already available system utilities when they meet the need.

**Why:** The package-management Python installer failed because `.pythonlibs` was not a valid Python environment. The failure can also leave workspace scaffolding/status changes that need checking.

**How to apply:** For PDF inspection, prefer existing Poppler utilities when possible. If a Python dependency is essential, inspect the Python environment first and verify the workspace diff afterward.