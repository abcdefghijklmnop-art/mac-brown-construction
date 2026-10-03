---
name: FFGS schema implementation
description: How schema.org markup is structured and applied across the FFGS site
---

## Schema utility location
`artifacts/ffgs/src/lib/schema.tsx` — exports SchemaScript component, localBusinessSchema, guideSchoolCourseSchema, articleSchema(), faqPageSchema().

## Applied where
- `App.tsx` — localBusinessSchema (LocalBusiness + EducationalOrganization), sitewide
- `guide-school.tsx` — guideSchoolCourseSchema + faqPageSchema(faqs)
- All 10 city pages — spread of guideSchoolCourseSchema with overridden name/description/url/image
- `blog-post-detail.tsx` — articleSchema(post), keywords meta tag

## Key IDs used
- Business: `https://flyfishingguideschool.com/#business`
- Person (Mac Brown): `https://macbrownflyfish.com/#mac-brown` (cross-site reference)

**Why:** FFGS is primarily an EducationalOrganization so we dual-type LocalBusiness+EducationalOrganization. Mac Brown person schema lives on MBFF; FFGS references it by @id for entity linkage.

**How to apply:** Any new program pages should import SchemaScript + guideSchoolCourseSchema and override fields. New blog posts need keywords added to blog-posts.ts.
