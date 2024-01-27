import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core'
import { z } from 'zod'

const GetStatusPositiveResponse = z
  .object({
    status: z.literal('success'),
    data: z.object({ status: z.string() }).passthrough(),
  })
  .passthrough()
const GetStatusNegativeResponse = z
  .object({
    status: z.literal('error'),
    error: z.object({ message: z.string() }).passthrough(),
  })
  .passthrough()
const GetV1StatsPositiveResponse = z
  .object({
    status: z.literal('success'),
    data: z
      .object({
        shared: z
          .object({
            countFromLanding: z
              .number()
              .int()
              .gte(-9007199254740991)
              .lte(9007199254740991),
            countFromLanding24: z
              .number()
              .int()
              .gte(-9007199254740991)
              .lte(9007199254740991),
          })
          .passthrough(),
        perChainId: z.record(
          z
            .object({
              popularRpc: z.string(),
              uniqueUsers: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              responseTimeMs: z
                .object({
                  avg: z
                    .number()
                    .gte(-900719254740991)
                    .lte(1.7976931348623157e308),
                  min: z
                    .number()
                    .gte(-900719254740991)
                    .lte(1.7976931348623157e308),
                  max: z
                    .number()
                    .gte(-900719254740991)
                    .lte(1.7976931348623157e308),
                })
                .passthrough(),
              topRpcs: z.array(z.string()),
              errorCount: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              errorCount24: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              okCount: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              okCount24: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              totalCount: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              totalCount24: z
                .number()
                .int()
                .gte(-9007199254740991)
                .lte(9007199254740991),
              avgAttempts: z
                .number()
                .gte(-900719254740991)
                .lte(1.7976931348623157e308),
              avgAttempts24: z
                .number()
                .gte(-900719254740991)
                .lte(1.7976931348623157e308),
            })
            .passthrough()
        ),
      })
      .passthrough(),
  })
  .passthrough()
const GetV1StatsNegativeResponse = z
  .object({
    status: z.literal('error'),
    error: z.object({ message: z.string() }).passthrough(),
  })
  .passthrough()

export const schemas = {
  GetStatusPositiveResponse,
  GetStatusNegativeResponse,
  GetV1StatsPositiveResponse,
  GetV1StatsNegativeResponse,
}

const endpoints = makeApi([
  {
    method: 'get',
    path: '/status',
    alias: 'GetStatus',
    requestFormat: 'json',
    response: GetStatusPositiveResponse,
    errors: [
      {
        status: 400,
        description: `GET /status Negative response`,
        schema: GetStatusNegativeResponse,
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/stats',
    alias: 'GetV1Stats',
    requestFormat: 'json',
    response: GetV1StatsPositiveResponse,
    errors: [
      {
        status: 400,
        description: `GET /v1/stats Negative response`,
        schema: GetV1StatsNegativeResponse,
      },
    ],
  },
])

export const api = new Zodios(endpoints)

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options)
}
