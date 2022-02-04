## Zebra Striping Table

Table styles can be overridden to have alternate colors for table rows.

```ts
import Color from 'color';
import * as BLUIColors from '@brightlayer-ui/colors';
...
"&:nth-of-type(odd):not($selected)": {
    backgroundColor: BLUIColors.darkBlack[300],
    "&$hover:hover": {
        backgroundColor: Color(BLUIColors.darkBlack[300])
            .mix(Color(MediumBlackBackground), 0.5)
            .string(),
    },
}
```

<div style="width: 100%; text-align: center">
    <img width="100%" style="max-width: 600px" alt="Zebra Striping Table" src="./images/zebraStripingTable.png">
</div>