# Item Lists

## Overview

Item List is a named collection of entities.

## Types

Item Lists may receive data from different providers. Currently the following types are implemented.

### TEXT

The simplest way to create a collection. The data should be provided in Items field, each entity on a separate line.

### FILE

You can retrieve entities from a file in the filesystem available to Collector. File path should be provided in Path field. If the file is not found, an empty collection is returned. Entities are separated by a line break.

