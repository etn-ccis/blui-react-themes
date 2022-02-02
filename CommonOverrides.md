## Zebra Striping Table

Table styles can be overridden to have alternate colors for table rows.

```
"&:nth-of-type(odd):not($selected)": {
    backgroundColor: BLUIColors.darkBlack[300],
    "&$hover:hover": {
        backgroundColor: Color(BLUIColors.darkBlack[300])
            .mix(Color(MediumBlackBackground), 0.5)
            .string(),
    },
}
```