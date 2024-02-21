---
layout: post
title: "returning a date as an int in t-sql"
category: code
---

```sql
DECLARE @date AS DATE = GETDATE()

SELECT Date_As_Int = (YEAR(@date) * 10000) +
                     (MONTH(@date) * 100) +
                     (DAY(@date))
```

> 20240221

This is for those times where you need a datekey, or just want your date as an int. It's an alternative to `FORMAT` plus `CAST`.