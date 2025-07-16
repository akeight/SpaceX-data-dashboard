# Web Development Project 5 - 🚀 SpaceX Launch Dashboard

Submitted by: Allyson Keightley

Explore live SpaceX mission data with this interactive frontend dashboard.  
Built with React and styled with custom components, the app pulls real launch data from the public [SpaceX REST API](https://github.com/r-spacex/SpaceX-API).

Time spent: 9 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

- [x] Patch image displayed, color coded "Success" stats, and video link for each launch
- [x] Designed with a modern UI layout

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./public/SpaceXLaunch.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with ...  

[Kap](https://getkap.co/) for macOS


## Notes

One of the first challenges was selecting an API that met the project’s requirements. After choosing the SpaceX API, it took time to understand the structure of the data and how to use the documentation to access related resources like rocket names and launchpad details. Learning to match IDs across different endpoints was key to getting meaningful results on the dashboard.

Another challenge was building the filtering system that handled multiple input types (text, dropdown, and checkboxes) while keeping the UI responsive. Ensuring that filters updated together, worked on different attributes, and stayed in sync with the rendered results required careful state management and thoughtful condition logic inside the `.filter()` function.

## License

    Copyright 2025 Allyson Keightley

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
