# Tailwind CSS Purge Removes Dynamically Generated Classes

This repository demonstrates a bug where Tailwind CSS's purge process removes dynamically generated classes, leading to missing styles.  This commonly occurs in frameworks like Next.js or Nuxt.js where components generate content dynamically.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe that the dynamically generated content lacks styles because the corresponding classes were purged.

## Solution

The provided solution demonstrates how to configure Tailwind to prevent purging of dynamically generated classes. This involves adjusting the `purge` option in your Tailwind configuration file.