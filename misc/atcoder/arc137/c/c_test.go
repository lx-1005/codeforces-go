// Code generated by copypasta/template/atcoder/generator_test.go
package main

import (
	"github.com/EndlessCheng/codeforces-go/main/testutil"
	"testing"
)

// 题目：https://atcoder.jp/contests/arc137/tasks/arc137_c
// 提交：https://atcoder.jp/contests/arc137/submit?taskScreenName=arc137_c
// 对拍：https://atcoder.jp/contests/arc137/submissions?f.LanguageName=Go&f.Status=AC&f.Task=arc137_c&orderBy=source_length
func Test_run(t *testing.T) {
	t.Log("Current test is [c]")
	testCases := [][2]string{
		{
			`2
2 4`,
			`Alice`,
		},
		{
			`3
0 1 2`,
			`Bob`,
		},
		
	}
	testutil.AssertEqualStringCase(t, testCases, 0, run)
}